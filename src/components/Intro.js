import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const Intro = () => {
  return (
    <Element name="about">
      <div className="max-w-6xl p-2 m-auto md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse justify-between py-8 lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div className="flex flex-col justify-center lg:w-1/2 lg:mx-4">
            <img alt="card img" className="float-right rounded-t" src={img} />
          </div>
          <div
            className="flex-col w-full px-8 my-4 text-center lg:text-left lg:my-0 lg:justify-end lg:w-1/2"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl font-bold text-blue-900">
              Empowering Businesses with Expertise, Integrity, and Results
            </h3>
            <div>
              <p className="my-3 text-sm font-semibold text-gray-600">
                At Sale Compass, we are dedicated to empowering entrepreneurs and businesses with strategic insights and practical support tailored to their unique needs. Whether you're starting a new venture or scaling an existing one, our seasoned team of professionals offers personalized consultation services rooted in expertise, collaboration, and integrity. We provide the tools and guidance needed to thrive in today's competitive landscape.
              </p>
            </div>

            <div>
              <p className="my-3 text-sm font-semibold text-gray-600">
                What sets us apart is our commitment to realistic, actionable advice without overpromising. Our team includes PhD-level consultants with deep expertise in project management and business strategy. Clients trust us for our transparency, dedication, and focus on long-term success. Together, we build more than just businesses—we build futures.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 translate-x-2 group-hover:"
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
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Intro;
