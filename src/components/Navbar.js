import React,{useState} from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";

function Navbar() {
    const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const handleScroll = (e, targetId, targetPage) => {
    e.preventDefault(); // Prevent default anchor behavior

    // If the target page is the current page, scroll to the section
    if (window.location.pathname === targetPage) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If the target page is different, navigate to that page
      navigate(targetPage, { state: { scrollTo: targetId } });
    }
  };

  return (
    <header className="full-width fixed w-full top-0 z-40 bg-background shadow-sm px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link className="flex items-center" to="/">
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
            </Link>
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
                onClick={(e) => handleScroll(e, 'features', '/')}
              >
                Features
              </NavLink>
              <NavLink
                to="/Pricing"
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={(e) => handleScroll(e, 'about', '/')}
              >
                About
              </NavLink>
              <NavLink
                to="/"
                className="text-base font-medium hover:text-primary transition-colors"
                onClick={(e) => handleScroll(e, 'contact', '/')}
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
  )
}

export default Navbar