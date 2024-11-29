import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

const FaceRecognition = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const BOX_COLOR = "#00FFFF";
  const FONT = "16px sans-serif";
 
  console.log(faceapi.nets)
  // Load face-api.js models
  const loadModels = async () => {
    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]);
      console.log("Models loaded successfully.");
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading models:", error);
    }
  };
  console.log('TinyFaceDetector loaded:', faceapi.nets.tinyFaceDetector.isLoaded);
console.log('FaceExpressionNet loaded:', faceapi.nets.faceExpressionNet.isLoaded);

  // Detect faces and emotions
  const detectFacesAndEmotions = async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4 &&
      canvasRef.current
    ) {
      const video = webcamRef.current.video;

      // Set canvas dimensions
      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;

      try {
        // Use TinyFaceDetectorOptions with default settings
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        const displaySize = {
          width: video.videoWidth,
          height: video.videoHeight,
        };

        faceapi.matchDimensions(canvasRef.current, displaySize);

        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        resizedDetections.forEach((detection) => {
          const { box } = detection.detection;
          const expressions = detection.expressions;

          if (expressions) {
            const emotion =
              expressions.asSortedArray()[0]?.expression || "unknown";

            // Draw bounding box
            context.strokeStyle = BOX_COLOR;
            context.lineWidth = 2;
            context.strokeRect(box.x, box.y, box.width, box.height);

            // Draw emotion label
            context.fillStyle = BOX_COLOR;
            context.font = FONT;
            context.fillText(emotion, box.x, box.y - 10);
          }
        });
      } catch (error) {
        console.error("Detection error:", error);
      }
    }
  };

  useEffect(() => {
    loadModels();

    const detectInterval = setInterval(() => {
      detectFacesAndEmotions();
    }, 100); // Detection every 100ms

    return () => {
      clearInterval(detectInterval);
    };
  }, []);

  return (
    <div className="content-grid bg-muted min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl animate-pulse bg-slate-400 h-[80vh] w-full grid place-content-center">Loading AI Models...</div>
        </div>
      ) : (
        <div className="relative flex justify-center items-center">
          {/* Webcam */}
          <Webcam
            ref={webcamRef}
            className="rounded-md w-full h-[80vh]"
            videoConstraints={{ facingMode: "user" }}
            muted
          />
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-[80vh] z-10"
          />
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
