import React, { useState } from "react";
import { Link } from "react-router-dom";

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const questions = [
    {
      question: "Do you frequently feel sad or hopeless?",
      options: ["Yes", "No", "Others", "None"],
      answer: null, // Replace null with the index of the correct answer if needed
    },
    {
      question:
        "Have you lost interest or pleasure in activities you used to enjoy?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you often feel nervous, anxious, or on edge?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you have difficulty controlling your worry?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you have trouble focusing on tasks or conversations?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Have you experienced significant mood swings, from feeling extremely high to very low?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you frequently forget recent events or conversations?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you often feel restless or have trouble sitting still?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Have you had periods where you felt unusually happy or irritable for at least a week?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you experience delusions, such as believing things that others do not consider true?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Have you had hallucinations, like hearing voices or seeing things that aren't there?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you frequently feel physically slow or restless?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you have difficulty sleeping, or do you sleep too much?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you often feel disconnected from reality?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you experience excessive thoughts that lead to repetitive behaviors?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you feel excessively worried about multiple things?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you experience confusion about time or place?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Have you noticed changes in your ability to understand visual images or spatial relationships?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you often interrupt others or have trouble waiting your turn?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you engage in risky behaviors during high-energy periods, such as reckless spending or unsafe driving?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you feel a persistent fear or anxiety after a traumatic event?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you avoid situations or places that remind you of a traumatic event?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you feel irritable or angry without a clear cause?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you experience panic attacks, with feelings of intense fear or discomfort?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Have you noticed a significant withdrawal from social interactions?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you frequently lose things necessary for tasks, like keys or documents?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question: "Do you feel disconnected from your emotions or numb?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Have you experienced trouble remembering important aspects of a traumatic event?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you find it difficult to organize your thoughts or communicate clearly?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
    {
      question:
        "Do you have trouble finding the right words or following conversations?",
      options: ["Yes", "No", "Others", "None"],
      answer: null,
    },
  ];

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
      return total + (selectedAnswer === questions[index].answer ? 1 : 0);
    }, 0);
    alert(`Your score is ${score} out of ${questions.length}`);
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
