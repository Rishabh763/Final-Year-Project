import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import test from "../Test.json";
import * as tf from "@tensorflow/tfjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Test() {
  const { testType } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = test[testType];

  if (!questions) {
    return (
      <div className="text-5xl grid place-items-center h-screen font-bold">
        Test not found
      </div>
    );
  }

  const currentAnswer = watch(`question_${currentQuestion}`);

  let model; // Global model variable to avoid retraining

  // Initialize and train the model once
  const initializeModel = () => {
    model = tf.sequential();
    model.add(
      tf.layers.dense({ units: 1, inputShape: [30], activation: "sigmoid" })
    );
    model.compile({ loss: "binaryCrossentropy", optimizer: "adam" });

    // Example data for training
    const trainingFeatures = tf.tensor2d(
      [[0, 1, 2, 3, ...Array(26).fill(1)]],
      [1, 30]
    ); // Replace with actual data
    const trainingLabels = tf.tensor2d([[1]], [1, 1]);

    model.fit(trainingFeatures, trainingLabels, { epochs: 100 }).then(() => {
      console.log("Model trained successfully!");
    });
  };

  // Handle form submission
  const handleFormSubmit = (data) => {
    // Preprocess form data for TensorFlow
    const numericalData = Object.values(data).map((value) => {
      switch (value) {
        case "No":
          return 0;
        case "Sometimes":
          return 1;
        case "Often":
          return 2;
        case "Yes":
          return 3;
        default:
          return 0; // Handle unexpected values
      }
    });

    const features = tf.tensor2d([numericalData], [1, numericalData.length]);

    // Make predictions
    const prediction = model.predict(features);
    prediction.data().then((predictionData) => {
      const threshold = 0.5;
      const predictedClass = predictionData[0] > threshold ? "Yes" : "No";
      console.log("Predicted class:", predictedClass);

      toast.info(`Prediction: ${predictedClass}`, {
        position: "top-center",
        autoClose: 3000,
      });
    });

    // Calculate quiz score
    let calculatedScore = 0;
    questions.forEach((question, index) => {
      const userAnswer = data[`question_${index}`];
      const correctAnswer = question.answer;
      if (userAnswer === correctAnswer) {
        calculatedScore += 1;
      }
    });

    // Set score and notify
    setScore(calculatedScore);
    console.log("Form Data: ", JSON.stringify(data, null, 2));
    console.log("Score: ", calculatedScore);

    toast.success(`Test submitted successfully!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  // Initialize model when the app starts
  initializeModel();

  const handleNext = (e) => {
    // e.preventDefault();
    setAnswers((prev) => ({
      ...prev,
      [`question_${currentQuestion}`]: currentAnswer,
    }));

    if (currentAnswer) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="content-grid bg-muted min-h-screen">
      <section className="full-width bg-muted container mx-auto py-12 md:py-20">
        <div className="space-y-4">
          <Link to="/">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Back
            </button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Take the Test
          </h1>

          <ToastContainer />

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="rounded-lg shadow-sm p-6 space-y-6">
              {questions.map((question, questionIndex) => (
                <div key={questionIndex} className={`${questionIndex === (questions.length - 1) ? "pb-0" : "pb-16"} space-y-4`}>
                  {/* Question Text */}
                  <h2 className="text-xl font-semibold"><span className="mr-2">Q{questionIndex+1}.</span>{question.question}</h2>

                  {/* Options */}
                  <div className="grid grid-cols-2 lg:grid-cols-4  gap-2 mt-2">
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center">
                        <label
                          htmlFor={`question_${questionIndex}_option_${optionIndex}`}
                          className={`form__label relative inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm font-medium ${
                            errors[`question_${questionIndex}`]
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          <input
                            type="radio"
                            id={`question_${questionIndex}_option_${optionIndex}`}
                            value={option} // The radio input's value is the option text
                            {...register(`question_${questionIndex}`, {
                              required: "Please select an option.",
                            })}
                            className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2"
                          />
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Error Message */}
                  {errors[`question_${questionIndex}`] && (
                    <p className="text-red-500 text-sm">
                      {errors[`question_${questionIndex}`].message}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-6"
              >
                Submit
              </button>
            </div>
          </form>

          {/* <div className="text-sm text-muted-foreground mt-4">
            {questions.length} questions in total
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Test;
