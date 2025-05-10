import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

function Result() {

  const location = useLocation();

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  const {
    predictedClass,
    normalizedScore,
    nextRoute,
    testType // <- this tells us which test was just completed
  } = location.state || {};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const rawPrefix = currentUser.email.split("@")[0];
        const cleanedPrefix = rawPrefix.replace(/[0-9]/g, "");
        const capitalizedPrefix = cleanedPrefix.charAt(0).toUpperCase() + cleanedPrefix.slice(1);

        setUsername(capitalizedPrefix);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchLatestDoc = async () => {
      if (!user) return;

      try {
        const q = query(
          collection(db, "user", "PsychometricTest", user.email),
          orderBy("createdAt", "desc"),
          limit(1)
        );

        await getDocs(q); // Assuming you want to use this later or for logging
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestDoc();
  }, [user]);

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
    } else if (testType === "PsychometricTest") {
      return (
        <>
          <p className="text-lg text-center mb-6">
            Your diagonise with  {nextRoute.replace(/([A-Z])/g, ' $1').trim()}. please check the severity of disease
          </p>
        </>
      );
    }
    else {
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
      return `/dashboard/${username}`;
    }
  };

  return (
    <div className="content-grid min-h-screen bg-muted">
      <main className="grid place-content-center">
        <div className="container max-w-[75ch] w-full flex flex-col gap-2 items-center mx-auto p-8 bg-white shadow-2xl rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Test Result</h1>

          {renderDescription()}

          {normalizedScore !== undefined && testType !== "BasicTest" && testType !== "PsychometricTest" && (
            <p className="text-center text-lg mb-6 font-semibold">
              Your Score: {(normalizedScore * 100).toFixed(2)}
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
