import React from "react";
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const { predictedClass } = location.state || {};

  return (
    <div className="content-grid min-h-screen bg-muted">
      <main className="grid place-content-center">
        <div className="container max-w-[75ch] w-full flex flex-col gap-2 items-center mx-auto p-8 bg-white shadow-2xl rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Test Result</h1>
          {predictedClass === "positive" ? (
        <>
          <p className="text-lg text-center mb-6">
            Based on your responses, you have been diagnosed with mental illness. This
            is a common and it's important to seek
            professional help.
          </p>
          <p className="text-lg text-center mb-8">
            Don't worry, you're not alone. Millions of people worldwide face
            similar challenges. With the right treatment and support, you can
            manage your condition and live a fulfilling life.
          </p>
        </>
      ) : (
        <>
          <p className="text-lg text-center mb-6">
            Based on your responses, no mental health conditions were detected.
          </p>
          <p className="text-lg text-center mb-8">
            However, it's always a good idea to prioritize your mental health.
            Stay proactive and take care of your well-being!
          </p>
        </>
      )}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link
                to={`${predictedClass === "positive" ? "/Disorders": "/"}`}
              >
                Proceed to Next Test
              </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Result;
