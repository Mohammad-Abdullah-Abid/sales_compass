import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div
          className="p-2 m-auto mx-4 mt-8 overflow-hidden lg:mt-4 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <div className="flex flex-col justify-between py-8 text-center lg:flex-row lg:text-left">
            <div
              className="flex flex-col justify-center lg:w-1/2"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 text-3xl font-bold text-blue-900 md:text-5xl">
              Empowering businesses with tailored solutions to scale and succeed.
                {/* Bespoke software solutions for your unique business needs */}
              </h1>
              <div className="mb-5 text-xl font-semibold tracking-tight text-gray-500">
              We provide expert guidance, actionable strategies, and innovative digital tools to help you thrive.
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                {/* <Link to="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link> */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0"
                >
                  Get Started
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-gray-500 shadow-xl hover:bg-gray-400 rounded-2xl sm:w-auto sm:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="flex w-full lg:justify-end lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                alt="card img"
                className="float-right w-full duration-1000 rounded-t"
                src={heroImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
