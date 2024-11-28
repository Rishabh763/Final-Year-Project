import React from "react";
import {Link} from "react-router-dom"

function Result() {
  return (
    <div className="content-grid min-h-screen bg-muted">
      <main className="grid place-content-center">
        <div className="container max-w-[75ch] flex flex-col gap-2 items-center mx-auto p-8 bg-white shadow-2xl rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Test Result</h1>
          <p className="text-lg text-center mb-6">
            Based on your responses, you have been diagnosed with Dementia. This
            is a common mental health condition, and it's important to seek
            professional help.
          </p>
          <p className="text-lg text-center mb-8">
            Don't worry, you're not alone. Millions of people worldwide face
            similar challenges. With the right treatment and support, you can
            manage your condition and live a fulfilling life.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link
                to="#"
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
