import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";

function Home({ handleDiseaseSelect }) {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const diseases = [
    "Clinical Depression",
    "Anxiety Disorder",
    "Bipolar Disorder",
    "Dementia",
    "Attention Deficit Hyperactivity Disorder",
    "Schizophrenia",
    "Obsessive Compulsive Disorder",
    "Post Traumatic Stress Disorder",
  ];

  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      <div className="content-grid bg-background">
        <button className="size-16 md:size-20 rounded-full bg-primary fixed right-4 md:right-8 bottom-4 md:bottom-8 z-50 grid place-content-center hover:bg-primary/70 hover:scale-105 transition">
          <img src="/Assets/chatbot1.png" alt="chatbot" />
        </button>
        <Link to="/FaceRecogination" alt="Face_Recogination">
          <button className="size-16 md:size-20 rounded-full  fixed right-4 md:right-8 bottom-24 md:bottom-32 z-50 grid place-content-center hover:ring-offset-2 hover:scale-105 transition bg-[#E2E8F0] ring-2 ring-primary">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt
            >
              <circle
                cx="12"
                cy="12"
                r="8"
                stroke="#4A5568"
                stroke-width="2"
              />

              <circle cx="9.5" cy="11" r="0.75" fill="#4A5568" />
              <circle cx="14.5" cy="11" r="0.75" fill="#4A5568" />

              <path
                d="M9 15 C10 16, 14 16, 15 15"
                stroke="#4A5568"
                stroke-width="1.5"
                stroke-linecap="round"
                fill="none"
              />

              <path
                d="M3 3 H6 V6"
                stroke="#4A5568"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M18 3 H21 V6"
                stroke="#4A5568"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M3 18 H6 V21"
                stroke="#4A5568"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M18 18 H21 V21"
                stroke="#4A5568"
                stroke-width="2"
                stroke-linecap="round"
              />

            
            </svg>
          </button>
        </Link>
        <header className="full-width fixed w-full top-0 z-40 bg-background shadow-sm px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <a className="flex items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
              <span className="ml-2 text-xl font-semibold">Mind Matters</span>
            </a>
            <nav
              className={`${
                toggle ? "translate-x-[-100%]" : "translate-x-[0%]"
              } md:translate-x-0 fixed top-0 left-0 bottom-0 md:static flex flex-col md:flex-row md:gap-4 md:bg-transparent md:p-0 pl-6 pr-16 py-12 gap-4 bg-white transition-all w-4/6 md:w-auto z-40`}
            >
              <div className="block md:hidden pb-6 z-50" onClick={toggleMenu}>
                <img loading="lazy" src="/Assets/icon-close.svg" alt="" />
              </div>
              <NavLink
                to="/"
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Features
              </NavLink>
              <NavLink
                to="/"
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/"
                className="text-base font-medium hover:text-primary transition-colors"
              >
                About
              </NavLink>
              <NavLink
                to="/"
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Contact
              </NavLink>
              {userLoggedIn ? (
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate("/signin");
                    });
                  }}
                  className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/signin" alt="signin">
                    <button className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/signup" alt="signup">
                    <button className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </nav>
            <div className="flex items-center gap-2">
              {/* <Link to="/login">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Login
                </button>
              </Link> */}
              {userLoggedIn ? (
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate("/signin");
                    });
                  }}
                  className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/signin">
                    <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
              {/* <Link to="/signin">
                <button className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Sign In
                </button>
              </Link> */}

              <div className="block md:hidden z-50" onClick={toggleMenu}>
                <img
                  className="h-5 aspect-auto"
                  src="/Assets/icon-menu.svg"
                  alt="icon-menu"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="bg-image full-width grid place-items-center  content-center  w-full h-screen">
          <div className="flex flex-col items-center space-y-4 max-w-3xl z-10 bg-white/30 backdrop-blur p-6 rounded-2xl">
            <h1 className="text-4xl text-primary text-center font-bold tracking-tight md:text-4xl lg:text-5xl">
              Unlock Your Mental Wellbeing
            </h1>
            <p className="text-background text-center md:text-lg">
              Mind Matters is a comprehensive mental health platform that
              empowers you to take control of your emotional and psychological
              well-being.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link to="/test/BasicTest">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Get Started
                </button>
              </Link>
              <button
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted full-width hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                href="#"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* <div className="full-width absolute w-full h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        </div> */}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
            {diseases.map((i, index) => (
              <li className="text-lg md:ml-8  w-fit " key={index}>
                <Link
                  to={`/Disorder/${i.replace(/\s+/g, "")}`}
                  onClick={() => handleDiseaseSelect(i)}
                  className="w-fit transition-colors full-width hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {i}
                </Link>
                <br />
              </li>
            ))}
          </ul>
        </section>
        <section className=" container mx-auto py-12 md:py-20">
          <div className="grid gap-8 items-center md:grid-cols-2">
            <div className="order-2 md:order-1">
              <img
                src="/Assets/benefits.jpg"
                alt="Benefits Image"
                className="mx-auto animate-float w-full aspect-[16/9] object-cover rounded-md"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Discover the Benefits
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Mind Matters offers a range of features to help you improve your
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                <Link to="/test/PsychometricTest">
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
            <p>© 2024 Mind Matters. All rights reserved.</p>
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
    </div>
  );
}

export default Home;
