import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { throttle } from "lodash";

const Face_Recogination= () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load face-api.js models
  const loadModels = async () => {
    setIsLoading(true);
    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    await faceapi.nets.faceExpressionNet.loadFromUri("/models");
    setIsLoading(false);
  };

  // Function to detect faces and emotions
  const detectFacesAndEmotions = throttle(async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4 &&
      canvasRef.current
    ) {
      const video = webcamRef.current.video;
      const displaySize = { width: video.videoWidth, height: video.videoHeight };

      faceapi.matchDimensions(canvasRef.current, displaySize);
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      const context = canvasRef.current.getContext("2d");
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      resizedDetections.forEach((detection) => {
        const { box, expressions } = detection.detection;
        const emotion = expressions.asSortedArray()[0].expression;

        // Draw bounding box
        context.strokeStyle = "#00FF00";
        context.lineWidth = 4;
        context.strokeRect(box.x, box.y, box.width, box.height);

        // Draw emotion label
        context.fillStyle = "#00FF00";
        context.font = "20px Arial";
        context.fillText(emotion, box.x, box.y - 10);
      });
    }
  }, 200);

  useEffect(() => {
    loadModels();

    const interval = setInterval(() => {
      detectFacesAndEmotions();
    }, 200); // Run detection every 200 ms for performance

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content-grid bg-muted min-h-screen pt-8">
      {isLoading ? (
        <div className="gradient-text">Loading AI Models...</div>
      ) : (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
          {/* Webcam */}
          <Webcam ref={webcamRef} className="rounded-md w-full lg:h-[80vh]" muted />
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

export default Face_Recogination
