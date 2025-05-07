import React from "react";
import { Link, useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const {
    predictedClass,
    score,
    nextRoute,
    testType // <- this tells us which test was just completed
  } = location.state || {};

  // Handle description
  const renderDescription = () => {
    if (testType === "BasicTest") {
      return predictedClass === "positive" ? (
        <>
          <p className="text-lg text-center mb-6">
            Signs of a potential mental health condition were detected. Proceed to the Psychometric Test for deeper analysis.
          </p>
        </>
      ) : (
        <>
          <p className="text-lg text-center mb-6">
            No signs of mental health issues detected in the Basic Test.
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="text-lg text-center mb-6">
            Thank you for completing the test. Please proceed accordingly.
          </p>
        </>
      );
    }
  };

  // Handle next route logic
  const determineNextRoute = () => {
    if (testType === "BasicTest") {
      return predictedClass === "positive" ? "/test/PsychometricTest" : "/";
    } else if (testType === "PsychometricTest") {
      return `/test/${nextRoute}`;
    } else {
      return "/dashboard/rishabh";
    }
  };

  return (
    <div className="content-grid min-h-screen bg-muted">
      <main className="grid place-content-center">
        <div className="container max-w-[75ch] w-full flex flex-col gap-2 items-center mx-auto p-8 bg-white shadow-2xl rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Test Result</h1>

          {renderDescription()}

          {score !== undefined && (
            <p className="text-center text-lg mb-6 font-semibold">
              Your Score: {score}
            </p>
          )}

          <Link to={determineNextRoute()}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {testType === "BasicTest" && predictedClass === "negative"
                ? "Go to Home"
                : "Proceed"}
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Result;
