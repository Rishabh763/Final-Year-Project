import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

const FaceRecognition = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const BOX_COLOR = "#00FFFF";
  const FONT = "16px sans-serif";

  // Load face-api.js models
  const loadModels = async () => {
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
      console.log("Models loaded successfully.");
    } catch (error) {
      console.error("Error loading models:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to detect faces and emotions
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

      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      const displaySize = { width: video.videoWidth, height: video.videoHeight };
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      const context = canvasRef.current.getContext("2d");
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      resizedDetections.forEach((detection) => {
        const { box } = detection.detection;
        const expressions = detection.expressions;

        if (expressions) {
          const emotion = expressions.asSortedArray()[0]?.expression || "unknown";

          // Draw bounding box (square)
          const size = Math.max(box.width, box.height);
          context.strokeStyle = BOX_COLOR;
          context.lineWidth = 2;
          context.strokeRect(box.x, box.y, size, size);

          // Draw emotion label
          context.fillStyle = BOX_COLOR;
          context.font = FONT;
          context.fillText(emotion, box.x, box.y - 10);
        }
      });
    }
  };

  useEffect(() => {
    loadModels();

    const detectInterval = setInterval(() => {
      detectFacesAndEmotions();
    }, 20); // Adjust detection frequency

    return () => {
      clearInterval(detectInterval);
    };
  }, []);

  return (
    <div className="content-grid bg-muted min-h-screen">
      {isLoading ? (
        <div className="relative flex justify-center items-center gradient rounded-md mt-8 md:mt-16 h-[80vh] animate-pulse bg-slate-400">
          <div className="text-xl">Loading AI Models...</div>
        </div>
      ) : (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
          {/* Webcam */}
          <Webcam
            ref={webcamRef}
            className="rounded-md w-full lg:h-[80vh]"
            videoConstraints={{
              facingMode: "user",
            }}
            muted
          />
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full lg:h-[80vh] z-10"
          />
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
