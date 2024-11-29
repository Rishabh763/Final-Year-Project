import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="content-grid bg-muted min-h-screen container">
        <Navbar/>

      {/* Header */}
      

      {/* Main Content */}
      <main className=" mx-auto mt-16 px-4 py-12">
        {/* About Us Section */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At Mind Matters, we're dedicated to promoting mental wellness and providing support to those in need. Our team of experienced professionals is committed to making a positive impact on mental health.
          </p>
        </section>

        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/assets/brain.svg" alt="brain" />
              <h3 className="text-2xl font-bold text-primary ml-2">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To provide accessible, compassionate, and effective mental health services that empower individuals to overcome challenges and lead fulfilling lives.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img src="/assets/heart.svg" alt="heart" />
              <h3 className="text-2xl font-bold text-primary ml-2">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              A world where mental health is prioritized, stigma is eliminated, and everyone has the support they need to thrive mentally and emotionally.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Compassion and empathy in all our interactions</li>
            <li>Evidence-based practices and continuous learning</li>
            <li>Inclusivity and respect for diversity</li>
            <li>Collaboration with clients and community partners</li>
            <li>Commitment to ethical and professional standards</li>
          </ul>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-primary text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Us in Making a Difference</h3>
          <p className="mb-6">
            Whether you're seeking support or looking to contribute to our mission, we welcome you to be part of the Mind Matters community.
          </p>
          <button className="inline-flex items-center bg-white text-primary px-4 py-2 rounded-lg font-medium text-base hover:bg-blue-100">
            <img src="/assets/user-multiple.svg" alt="user" className="mr-2"/>
            Get Involved
          </button>
        </section>
      </main>


    </div>
  );
}

export default About;
