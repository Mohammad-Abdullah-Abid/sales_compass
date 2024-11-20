import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Navigation and routing
import { handleNavigateAndScroll } from "../utils/scrollUtils";

const Footer = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <footer>
        <div className="max-w-full px-4 mx-auto bg-gray-100 border-t border-b footer sm:px-6 py-30">
          {/* Top area: Blocks */}
          <div className="grid gap-5 py-8 border-t border-gray-200 sm:grid-cols-12 md:py-12 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border p-8 mx-auto text-center text-white bg-blue-900 border-b-4 border-gray-200 rounded-lg xl:w-80">
                <h3 className="mb-4 text-4xl font-bold">
                  Sales Compass
                </h3>
                <div className="font-medium text-white text-md">
                  <h5>DaftarKhwan Downtown</h5>
                  <p>Gulberg II,</p>
                  <p>Lahore,</p>
                  <p>Pakistan.</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 mx-auto md:col-span-6 lg:col-span-1 ml-7">
              <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <div
                    className="text-[#013289] hover:tracking-wider transition duration-250 ease-in-out hover:text-blue-900 cursor-pointer"
                    onClick={() => handleNavigateAndScroll("about", navigate, location)}
                  >
                    About
                  </div>
                </li>
                <li className="mb-2">
                  <div
                    className="text-[#013289] hover:tracking-wider transition duration-250 ease-in-out hover:text-blue-900 cursor-pointer"
                    onClick={() => handleNavigateAndScroll("services", navigate, location)}
                  >
                    Services
                  </div>
                </li>
                <li className="mb-2">
                  <Link
                    to="/contact"
                    className="text-[#013289] hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 mx-auto md:col-span-6 lg:col-span-4">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <div

                    className="text-[#013289]"
                  >
                    Company Establishment Consultation
                  </div>
                </li>
                <li className="mb-2">
                  <div
                    className="text-[#013289]"
                  >
                    Business Consultation for Startups
                  </div>
                </li>
                <li className="mb-2">
                  <div
                    className="text-[#013289]"
                  >
                    Project Management Consultation
                  </div>
                </li>

              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 mx-auto font-bold text-center text-blue-900 uppercase lg:col-span-3">
              <div className="mb-6 text-xl">Social Media Links.</div>

              <div className="mb-6 font-medium text-md">
                Follow us on social media.
              </div>
              <div className="mx-auto mt-2 text-center">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      to="#"
                      className="flex items-center justify-center text-blue-900 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-500 hover:bg-white-100"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex items-center justify-center text-blue-900 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-500 hover:bg-white-100"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center px-4 mx-auto md:justify-between">
            <div className="w-full px-4 py-2 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-gray-200">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <Link to="#" className=" hover:text-gray-900">
                  Sales Compass
                </Link>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
