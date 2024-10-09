import React,{useState} from "react";
import { Link } from "react-router-dom";

function Home({handleDiseaseSelect}) {
  const diseases = [
    "Clinical Depression",
    "Anxiety Disorder",
    "Bipolar Disorder",
    "Dementia",
    "Attention-Deficit/Hyperactivity Disorder",
    "Schizophrenia",
    "Obsessive Compulsive Disorder",
    "Post-Traumatic Stress Disorder"
  ];
  
  return (
    <div classNameName="">
      <div className="content-grid bg-background">
        <header className="full-width fixed w-full top-0 z-50 bg-background px-4 py-3 shadow-sm md:px-6 md:py-4">
          <div className="container mx-auto flex items-center justify-between">
            <a className="flex items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
              <span className="ml-2 text-lg font-semibold">Mindful</span>
            </a>
            <nav className="hidden space-x-4 md:flex">
              <a
                className="text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                About
              </a>
              <a
                className="text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Link to="/login">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </header>
        <section className=" grid place-content-center  h-screen">
          <div className="flex flex-col items-center space-y-4 max-w-3xl z-10 ">
            <h1 className="text-3xl text-primary text-center font-bold tracking-tight md:text-4xl lg:text-5xl">
              Unlock Your Mental Wellbeing
            </h1>
            <p className="text-background text-center md:text-lg">
              Mindful is a comprehensive mental health platform that empowers
              you to take control of your emotional and psychological
              well-being.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link to="/test">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Get Started
                </button>
              </Link>
              <a
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        <div className="full-width bg-image absolute w-full h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          {/* <img
                  src="Assets/hero-image.jpg"
                  alt="Hero Image"
                  className="mx-auto animate-float object-cover"
                /> */}
        </div>
        <section className="bg-muted full-width  py-12 md:py-20">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4 rounded-lg bg-background p-6 shadow-sm transition-transform hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-12 w-12 text-primary"
                >
                  <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                  <path d="M11 12 5.12 2.2"></path>
                  <path d="m13 12 5.88-9.8"></path>
                  <path d="M8 7h8"></path>
                  <circle cx="12" cy="17" r="5"></circle>
                  <path d="M12 18v-2h-.5"></path>
                </svg>
                <h3 className="text-xl font-semibold">Mindfulness Exercises</h3>
                <p className="text-muted-foreground">
                  Explore a wide range of guided meditations and breathing
                  exercises to help you find inner peace and clarity.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-background p-6 shadow-sm transition-transform hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-12 w-12 text-primary"
                >
                  <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"></path>
                  <path d="M9 19.8V15m0 0H4.2M9 15l-6 6"></path>
                  <path d="M15 4.2V9m0 0h4.8M15 9l6-6"></path>
                  <path d="M9 4.2V9m0 0H4.2M9 9 3 3"></path>
                </svg>
                <h3 className="text-xl font-semibold">Professional Support</h3>
                <p className="text-muted-foreground">
                  Connect with licensed therapists and counselors for
                  personalized support and guidance.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-background p-6 shadow-sm transition-transform hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-12 w-12 text-primary"
                >
                  <line x1="10" x2="14" y1="2" y2="2"></line>
                  <line x1="12" x2="15" y1="14" y2="11"></line>
                  <circle cx="12" cy="14" r="8"></circle>
                </svg>
                <h3 className="text-xl font-semibold">Mood Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your emotional state over time and identify patterns
                  to better understand your mental health.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <h2 className="text-2xl font-bold tracking-tight mb-4 md:text-3xl lg:text-4xl">
            There are
            <span className="highlight">8 types of mental disorder</span> are as
            follows :
          </h2>
          <ul className="disease list-disc">
           {diseases.map((i,index)=>
               (
                 <li className="text-lg md:ml-8  w-fit " key={index}>
                  <Link to={`/Disorder/${encodeURIComponent(i)}`}  onClick={() => handleDiseaseSelect(i)}  className="w-fit transition-colors full-width hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  {i}
                 </Link> 
                 <br/>
                  </li>
                 )
            )}
          </ul>
        </section>
        <section className=" container mx-auto py-12 md:py-20">
          <div className="grid gap-8 items-center md:grid-cols-2">
            <div className="order-2 md:order-1">
              <img
                src="/Assets/benefits.jpg"
                alt="Benefits Image"
                className="mx-auto animate-float w-full aspect-[16/9] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Discover the Benefits
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Mindful offers a range of features to help you improve your
                mental well-being and live a more fulfilling life.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Personalized self-care plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Comprehensive mental health assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>Seamless access to mental health professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-muted full-width py-12 md:py-20">
          <div className="container mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Start Your Journey to Wellbeing
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Take the first step towards a healthier, happier you.
              </p>
              <div className="flex justify-center">
                <Link to="/test">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-12 md:py-20">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Our dedicated team of mental health professionals is here to
              support you.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full mx-auto h-20 w-20">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted full-width">
                    RS
                  </span>
                </span>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Rishabh Singh</h3>
                  <p className="text-muted-foreground">Web developer</p>
                </div>
              </div>
              <div className="space-y-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full mx-auto h-20 w-20">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted full-width">
                    VS
                  </span>
                </span>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Vidhi Seth</h3>
                  <p className="text-muted-foreground">Machine Learning</p>
                </div>
              </div>
              <div className="space-y-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full mx-auto h-20 w-20">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted full-width">
                    SG
                  </span>
                </span>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Shrey Gandhi</h3>
                  <p className="text-muted-foreground">Data Analyist</p>
                </div>
              </div>
              <div className="space-y-2">
                <span className="relative flex shrink-0 overflow-hidden rounded-full mx-auto h-20 w-20">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted full-width">
                    SS
                  </span>
                </span>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Shruti Sahu</h3>
                  <p className="text-muted-foreground">Idea & Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted full-width py-12 md:py-20">
          <div className="container mx-auto">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Contact Us
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Have a question or need support? Get in touch with us.
              </p>
              <form className="mx-auto max-w-md space-y-4">
                <input
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  type="text"
                  placeholder="Name"
                  required=""
                />
                <input
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  type="email"
                  placeholder="Email"
                  required=""
                />
                <textarea
                  className="flex min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  placeholder="Message"
                  rows="4"
                  required=""
                ></textarea>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="bg-muted full-width py-6 text-center text-sm text-muted-foreground">
          <div className="container mx-auto">
            <p>© 2024 Mindful. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* <div classNameName='text-center sticky top-0'>
          <h1 classNameName='text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Home</h1>
          <div classNameName='flex gap-8 py-4 justify-center text-2xl'>
              <Link to="/signup" >signup</Link>
              <Link to="/login" >login</Link>
          </div>
        </div> */}
    </div>
  );
}

export default Home;
