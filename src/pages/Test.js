import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import test from "../Test.json";
import * as tf from "@tensorflow/tfjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; 
import { collection, addDoc } from "firebase/firestore"; 
import { set } from "lodash";


// Global TensorFlow model
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
  const Navigate = useNavigate(); 
  const [user,setUser] = useState();
  const [email,setEmail] = useState("");
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
      if(user){
        setUser(user);
        setEmail(user.email);
      }else{
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

  const handleFormSubmit = async (data) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, testType,"users", email), {
        email: email,
        data:data
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "user",testType, email), {
        email: email,
        data:data
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
          return 0;
      }
    });

    let score = 0;

    numericalData.map((d)=>(
        score += d
    ));

    const threshold = 0.5;
    const predictedClass = (score/(numericalData.length*3)) > threshold ? "positive" : "negative";

    console.log(score,predictedClass,(score/(numericalData.length*3)),numericalData.length);

    


    const features = tf.tensor2d([numericalData], [1, numericalData.length]);
    const predictionTensor = model.predict(features);

    const predictionData = await predictionTensor.data();
    const Threshold = 0.5;
    const PredictedClass = predictionData[0] > threshold ? "Mentally ill" : "Mentally not ill";

    setPrediction(PredictedClass);

    
    Navigate('/result', { state: { predictedClass } });
    setLoading(false);
  };

  



  return (
    
    <div className="content-grid bg-muted min-h-screen">
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
                          {...register(`question_${questionIndex}`, {
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
                      {errors[`question_${questionIndex}`].message}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
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
