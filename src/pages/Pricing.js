import React from "react";
import Navbar from "../components/Navbar";


function Pricing() {
  return (
    <div className="content-grid min-h-screen place-content-center bg-muted">
        <Navbar/>
  <h1 className="text-5xl font-bold w-full text-center mt-24">Our Pricing</h1>
  <section className="grid w-11/12 mx-auto mt-12 md:mt-24 gap-8 md:w-10/12 lg:grid-cols-3">
    {/* Basic Plan */}
    <article className="bg-white text-gray-500 rounded-lg py-8 px-6 text-center shadow-md">
      <h2 className="text-lg font-bold">Basic</h2>
      <p className="flex items-end justify-center mt-4 text-5xl font-bold text-gray-800">
        <span className="text-2xl">$</span>49<span className="text-2xl">/month</span>
      </p>
      <ul className="mt-6 border-t border-gray-300">
        <li className="py-4 border-b border-gray-300">Access to mental health articles</li>
        <li className="py-4 border-b border-gray-300">Basic progress tracking tools</li>
        <li className="py-4 border-b border-gray-300">1 chat session per month</li>
      </ul>
      <button className="mt-6 w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-transparent hover:outline hover:outline-primary hover:text-primary transition">
        Learn more
      </button>
    </article>

    {/* Professional Plan */}
    <article className="bg-primary text-white rounded-lg py-10 px-6 text-center shadow-lg relative top-0 lg:top-[-1.5rem] z-10">
      <h2 className="text-lg font-bold">Professional</h2>
      <p className="flex items-end justify-center mt-4 text-5xl font-bold text-white">
        <span className="text-2xl">$</span>99<span className="text-2xl">/month</span>
      </p>
      <ul className="mt-6 border-t border-white/50">
        <li className="py-4 border-b border-white/50">Unlimited progress tracking</li>
        <li className="py-4 border-b border-white/50">Weekly virtual therapy sessions</li>
        <li className="py-4 border-b border-white/50">Exclusive mental health resources</li>
      </ul>
      <button className="mt-6 w-full py-3 bg-white text-primary font-semibold rounded-lg hover:bg-transparent hover:outline hover:outline-white hover:text-white transition">
        Learn more
      </button>
    </article>

    {/* Master Plan */}
    <article className="bg-white text-gray-500 rounded-lg py-8 px-6 text-center shadow-md">
      <h2 className="text-lg font-bold">Master</h2>
      <p className="flex items-end justify-center mt-4 text-5xl font-bold text-gray-800">
        <span className="text-2xl">$</span>199<span className="text-2xl">/month</span>
      </p>
      <ul className="mt-6 border-t border-gray-300">
        <li className="py-4 border-b border-gray-300">Personalized mental health plan</li>
        <li className="py-4 border-b border-gray-300">Daily check-ins with a counselor</li>
        <li className="py-4 border-b border-gray-300">Priority support and care</li>
      </ul>
      <button className="mt-6 w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-transparent hover:outline hover:outline-primary hover:text-primary transition">
        Learn more
      </button>
    </article>
  </section>
</div>

  );
}

export default Pricing;
