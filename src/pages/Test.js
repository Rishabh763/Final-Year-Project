import axios from 'axios';
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import test from "../Test.json";
import * as tf from "@tensorflow/tfjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Webcam from "react-webcam";
import { set } from "lodash";

// Global TensorFlow model
const disorderScores = {};
let model;
const initializeModel = async () => {
  if (!model) {
    const trainingFeatures = tf.tensor2d(
      [
        // Mentally ill examples
        [
          2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3,
          3, 2, 3, 2, 3, 2, 3
        ],
        [
          3, 2, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3,
          2, 3, 2, 3, 3, 2, 3
        ],
        [
          2, 3, 2, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3,
          2, 3, 3, 2, 3, 2, 3
        ],
        [
          3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2,
          3, 3, 2, 3, 3, 2, 3
        ],
        [
          3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3,
          2, 3, 3, 2, 3, 2, 3
        ],

        // Mentally not ill example
        [
          0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1,
          0, 1, 0, 1, 0, 1, 0
        ],
        [
          1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1,
          0, 1, 1, 0, 1, 0, 1
        ],
        [
          0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
          1, 0, 1, 0, 1, 0, 1
        ],
        [
          1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1,
          1, 0, 0, 1, 1, 0, 1
        ],
        [
          0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1,
          0, 1, 0, 1, 0, 1, 0
        ],
      ],
      [10, 30] // 10 samples, 30 features each
    );


    const trainingLabels = tf.tensor2d([[1], [1], [1], [1], [1], [0], [0], [0], [0], [0]], [10, 1]); // Labels for mentally ill and not ill

    model = tf.sequential();
    model.add(
      tf.layers.dense({ units: 1, inputShape: [30], activation: "sigmoid" })
    );
    model.compile({ loss: "binaryCrossentropy", optimizer: "adam" });

    await model.fit(trainingFeatures, trainingLabels, { epochs: 10 });
    console.log("Model trained successfully!");
  }
};

function Test() {
  const webcamRef = useRef(null);
  const Navigate = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const { testType } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [prediction, setPrediction] = useState(null);
  const questions = test[testType];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email);
      } else {
        Navigate('/signin');
        setUser(null);
      }
    })
    initializeModel();

  }, [user]);

  if (!questions) {
    return (
      <div className="text-5xl grid place-items-center h-screen font-bold">
        Test not found
      </div>
    );
  }




  const mapOptionToScore = (value) => {
    // Handles both option sets
    if (testType == "PsychometricTest") {
      switch (value) {
        case "Yes":
          return 0;
        case "No":
          return 1;
        case "Others":
          return 2;
        case "None":
          return 3;
        default:
          return 0;
      }

    }
    else {
      switch (value) {
        case "No":
        case "Never":
          return 0;
        case "Sometimes":
        case "Rarely":
          return 1;
        case "Often":
          return 2;
        case "Yes":
        case "Very Often":
          return 3;
        default:
          return 0;
      }
    }
  };

  const getNextResultRoute = (testType) => {
    const disorderTests = [
      "AttentionDeficitHyperactivityDisorder",
      "ClinicalDepression",
      "BipolarDisorder",
      "AnxietyDisorder",
      "Schizophrenia",
      "ObsessiveCompulsiveDisorder",
      "Dementia",
      "PostTraumaticStressDisorder"
    ];

    if (testType === "BasicTest") {
      return "PsychometricTest";
    } else if (testType === "PsychometricTest") {


      disorderTests.forEach(disorder => {
        disorderScores[disorder] = Math.floor(Math.random() * 100) + 1; // 1 to 100
      });

      // Find the disorder with the highest score
      const highestDisorder = Object.keys(disorderScores).reduce((a, b) =>
        disorderScores[a] > disorderScores[b] ? a : b
      );

      console.log("Disorder Scores:", disorderScores); // Optional: for debugging
      return highestDisorder;

    } else {
      return testType;
    }
  };



  const handleFormSubmit = async (data) => {
    setLoading(true);

    const response = await fetch("http://127.0.0.1:5000/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,       // all question answers
        testType    // string like "PsychometricTest"
      })

    });
    const result = await response.json();
    const { normalizedScore, predictedClass } = result;

    console.log("From Python server:", normalizedScore, predictedClass);

    // Score evaluation
    // const numericalData = Object.values(data).map(mapOptionToScore);
    // const score = numericalData.reduce((acc, val) => acc + val, 0);
    // const normalizedScore = (score / (numericalData.length * 3));
    // const predictedClass = normalizedScore > 0.5 ? "positive" : "negative";

    // TensorFlow prediction
    // const features = tf.tensor2d([numericalData], [1, numericalData.length]);
    // const predictionTensor = model.predict(features);
    // const predictionData = await predictionTensor.data();
    // const predictedLabel = predictionData[0] > 0.5 ? "Mentally ill" : "Mentally not ill";

    // setPrediction(predictedLabel);
    const nextRoute = getNextResultRoute(testType);

    try {
      const mentalIllness = predictedClass
      if (testType === "BasicTest") {
        await addDoc(collection(db, testType, "users", email), { email, mentalIllness, data, createdAt: serverTimestamp() });
        await addDoc(collection(db, "user", testType, email), { email, mentalIllness, data, createdAt: serverTimestamp() });

      } else if (testType === "PsychometricTest") {
        await addDoc(collection(db, testType, "users", email), { email, disorderScores, data, createdAt: serverTimestamp() });
        await addDoc(collection(db, "user", testType, email), { email, disorderScores, data, createdAt: serverTimestamp() });
      } else {
        const newScore = (normalizedScore * 100).toFixed(2);
        await addDoc(collection(db, testType, "users", email), { email, newScore, data, createdAt: serverTimestamp() });
        await addDoc(collection(db, "user", testType, email), { email, newScore, data, createdAt: serverTimestamp() });

      }
    } catch (e) {
      console.error("Firestore error:", e);
    }


    Navigate(`/result`, {
      state: { predictedClass, normalizedScore, nextRoute, testType },
    });

    setLoading(false);
  };


  return (

    <div className="content-grid bg-muted min-h-screen">
      <Webcam
        ref={webcamRef}
        className="fixed top-4 right-4 w-48 aspect-square rounded-full overflow-hidden z-50 object-cover"
        videoConstraints={{ facingMode: "user" }}
        muted
      />

      {/* {user && (<Navigate to={'/signin'} replace={true} />)} */}
      <section className="container mx-auto py-12 md:py-20">
        <div className="space-y-4">
          <Link to="/">
            <button className="inline-flex items-center justify-center rounded-md text-lg font-medium bg-primary text-primary-foreground h-10 px-4 py-2">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">Take the Test</h1>



          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="rounded-lg shadow-sm p-6 space-y-6">
              {questions.map((question, questionIndex) => (
                <div
                  key={questionIndex}
                  className={`${questions.length - 1 === questionIndex ? "pb-0" : "pb-16"
                    }  space-y-4`}
                >
                  <h2 className="text-xl font-semibold">
                    <span className="mr-2">Q{questionIndex + 1}.</span>
                    {question.question}
                  </h2>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
                    {question.options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className="form__label relative inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm font-medium"
                      >
                        <input
                          type="radio"
                          value={option}
                          {...register(`question_${questionIndex + 1}`, {
                            required: "Please select an option.",
                          })}
                          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>

                  {errors[`question_${questionIndex}`] && (
                    <p className="text-red-500 text-sm">
                      {errors[`question_${questionIndex - 1}`].message}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                // onClick={() => submitAnswers(answers)}
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-6"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
                ) : (
                  "Submit"
                )}

              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Test;
