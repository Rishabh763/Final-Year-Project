import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import test from "../Test.json";
import { useParams } from "react-router-dom";

function Test() {
  const { testType } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const questions = test[testType];

  // console.log(testType);
  // console.log(questions);

  if (!questions) {
    return (
      <div className="text-5xl grid place-items-center h-screen font-bold">
        Test not found
      </div>
    );
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    const score = selectedAnswers.reduce((total, selectedAnswer, index) => {
      const correctAnswer = questions[index]?.answer; // Ensure the question exists
  
      return total + (selectedAnswer === correctAnswer ? 1 : 0);
    }, 0);
  
  };
  return (
    <div className="content-grid bg-muted min-h-screen">
      <section className="full-width bg-muted container mx-auto py-12 md:py-20">
        <div className="space-y-4">
          <Link to="/">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              back
            </button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Take the Test
          </h1>
          <div className=" rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      variant={
                        selectedAnswers[currentQuestion] === index
                          ? "primary"
                          : "outline"
                      }
                      onClick={() => handleAnswerSelect(currentQuestion, index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                {currentQuestion > 0 && (
                  <button
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={handlePrevious}
                  >
                    Previous
                  </button>
                )}
                {currentQuestion < questions.length - 1 ? (
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;
