import React from "react";
import img from "../images/1.svg";
// import img2 from "../images/app.svg";
import img3 from "../images/2.svg";
import img4 from "../images/3.svg";
import collaboration from "../images/collaboration.svg"
import build from "../images/build.svg"
import { Element } from "react-scroll";
import mobileDevImg from "../images/mobile-development.svg"; // Assuming you have an image for mobile development
import websiteDevImg from "../images/website-development.svg"; // Assuming you have an image for website development

const Services = () => {
  return (
    <Element name="services">
      <div id="services" className="py-12 bg-gray-100">
        <section data-aos="zoom-in-down">
          <div className="py-4 my-4">
            <h2 className="my-2 text-3xl font-bold text-center text-blue-900 uppercase">
              services
            </h2>

            <div className="flex justify-center">
              <div className="w-24 border-b-4 border-blue-900"></div>
            </div>
            <h2 className="mx-12 mt-4 text-xl font-semibold text-center text-blue-900 lg:text-2xl">
              We offer specialized services designed to turn your vision into reality.
            </h2>
          </div>

          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group">
                <div className="m-5 text-sm text-justify">
                  <div
                    className="flex items-center justify-center w-full h-full rounded-lg"
                    style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
                  >
                    <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out object-contain"
                      src={img}
                      style={{ width: "150px", height: "150px" }} // Set equal size
                    />
                  </div>
                  <h2 className="my-4 text-2xl font-semibold text-center">
                    Company Establishment Consultation
                  </h2>
                  <p className="font-medium text-md">
                    From legal setup to operational planning, we guide you through every step of establishing your business. Our comprehensive service ensures that you launch with a solid foundation—set up for growth and success.
                  </p>
                </div>
              </div>



              <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group">
                <div className="m-5 text-sm text-justify">
                  <div
                    className="flex items-center justify-center w-full h-full rounded-lg"
                    style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
                  >
                    <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out object-contain"
                      src={img3}
                      style={{ width: "150px", height: "150px" }} // Set equal size
                    />
                  </div>
                  <h2 className="my-4 text-2xl font-semibold text-center ">
                    Business Consultation for Startups
                  </h2>
                  <p className="font-medium text-md">
                    Startups face unique hurdles, and we’re here to help you overcome them. We offer tailored advice to streamline your operations, refine your business model, and identify opportunities for rapid growth, helping you make smarter decisions along the way.
                  </p>
                </div>
              </div>

              <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group">
                <div className="m-5 text-sm text-justify">
                  <div
                    className="flex items-center justify-center w-full h-full rounded-lg"
                    style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
                  >
                    <img
                      alt="card img"
                      className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out object-contain"
                      src={img4}
                      style={{ width: "150px", height: "150px" }} // Set equal size
                    />
                  </div>
                  <h2 className="my-4 text-2xl font-semibold text-center ">
                    Project Management Consultation
                  </h2>
                  <p className="font-medium text-md">
                    Our project management experts ensure your initiatives stay on track, using advanced methodologies to deliver results. With years of academic and practical experience, we help you manage complexity and meet your goals with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-12" data-aos="fade-down" data-aos-delay="600">
            <div className="flex justify-center mt-6">
              {/* Flex container for the cards */}
              <div className="flex flex-wrap justify-center gap-6 w-full">
                {/* First Card */}
                <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group max-w-md w-full sm:w-96 md:w-90">
                  <div className="m-5 text-sm text-justify">
                    <div
                      className="flex items-center justify-center w-full h-full rounded-lg"
                      style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
                    >
                      <img
                        alt="mobile development"
                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out object-contain"
                        src={mobileDevImg}
                        style={{ width: "150px", height: "150px" }} // Set equal size
                      />
                    </div>
                    <h2 className="my-4 text-2xl font-semibold text-center">
                      Mobile App Development
                    </h2>
                    <p className="font-medium text-md">
                      We specialize in building powerful, user-friendly mobile applications that deliver a seamless experience across all devices. From ideation to deployment, we help you bring your app vision to life with precision and innovation.
                    </p>
                  </div>
                </div>

                {/* Second Card */}
                <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group max-w-md w-full sm:w-96 md:w-90">
                  <div className="m-5 text-sm text-justify">
                    <div
                      className="flex items-center justify-center w-full h-full rounded-lg"
                      style={{ backgroundColor: "#f0f0f0", padding: "20px" }}
                    >
                      <img
                        alt="website development"
                        className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out object-contain"
                        src={websiteDevImg}
                        style={{ width: "150px", height: "150px" }} // Set equal size
                      />
                    </div>
                    <h2 className="my-4 text-2xl font-semibold text-center">
                      Website Development
                    </h2>
                    <p className="font-medium text-md">
                      Our team crafts responsive and visually stunning websites that cater to your business needs. We ensure fast load times, modern design, and intuitive user interfaces to deliver the best possible experience for your users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

<section>
  <div className="h-auto max-w-6xl px-4 mx-auto sm:px-6 lg:px-12">
    <div
      className="flex flex-col-reverse py-8 lg:flex-row lg:text-left"
      data-aos="zoom-out"
    >
      <div className="flex flex-col justify-center w-full px-4 lg:w-1/2 lg:px-4">
        <div className="mb-4 text-blue-900 text-center md:text-left">
          <img src={build} alt="build" className="h-auto max-w-full md:mx-0 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-blue-900 lg:text-3xl text-center md:text-left mb-4 md:mb-2">
          We <span className="font-black">Build</span>
        </h3>
        <div>
          <p className="text-lg font-semibold text-gray-600 lg:text-xl text-center md:text-justify md:text-left">
            At Sale Compass, collaboration is at the heart of everything we do.
            We work closely with our clients to understand their vision, challenges, and goals. By fostering a partnership built on trust and communication, we deliver solutions that are tailored to your unique needs, ensuring your journey to success is seamless and efficient.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full px-4 lg:w-1/2 lg:px-4">
        <div className="mb-4 text-blue-900 text-center md:text-left">
          <img src={collaboration} alt="collaborate" className="h-auto max-w-full md:mx-0 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-blue-900 lg:text-3xl text-center md:text-left mb-4 md:mb-2">
          We <span className="font-black">Collaborate</span>
        </h3>
        <div>
          <p className="text-lg font-semibold text-gray-600 lg:text-xl text-center md:text-justify md:text-left">
            We don’t just provide services—we create foundations for growth. From innovative strategies to custom solutions, we build the tools, processes, and frameworks that empower businesses to scale and succeed. With a focus on long-term impact, we help transform ideas into sustainable achievements.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    </Element>
  );
};

export default Services;
