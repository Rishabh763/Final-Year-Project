import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import test from "../Test.json";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  

function Test() {
  const { testType } = useParams();
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
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

  const handleFormSubmit = (data) => {
    

    let calculatedScore = 0;

    questions.forEach((question, index) => {
      const userAnswer = data[`question_${index}`];
      const correctAnswer = question.answer;
      if (userAnswer === correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    console.log("Form Data: ", JSON.stringify(data, null, 2));
    console.log("Score: ", calculatedScore);

    toast.success(`Test submitted successfully!`, {
      position: "top-center",
      autoClose: 3000,  
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
            <div className="rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <label
                        htmlFor={`question_${currentQuestion}_option_${index}`}
                        className={`form__label relative inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-sm font-medium ${
                          errors[`question_${currentQuestion}`]
                          ? "text-red-500"
                          : ""
                        }`}
                      >
                        <input
                          type="radio"
                          id={`question_${currentQuestion}_option_${index}`}
                          value={option} // The radio input's value is the option text
                          {...register(`question_${currentQuestion}`, {
                            required: "Please select an option.",
                          })}
                          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2"
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>

                {errors[`question_${currentQuestion}`] && (
                  <p className="text-red-500 text-sm">
                    {errors[`question_${currentQuestion}`].message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              {currentQuestion > 0 && (
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}

              {currentQuestion < questions.length - 1 ? (
                <button
                  type="button"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  onClick={handleNext}
                  disabled={!currentAnswer} 
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  disabled={!currentAnswer} 
                >
                  Submit
                </button>
              )}
            </div>
          </form>
          <div className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;
