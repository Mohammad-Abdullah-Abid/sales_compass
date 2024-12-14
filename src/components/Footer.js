import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Navigation and routing
import { handleNavigateAndScroll } from "../utils/scrollUtils";
import SocialLinks from "./SocialLinks/SocialLinks";
import facebookIcon from '../images/social/facebook.png';
import instagramIcon from '../images/social/instagram.png';
import linkedinIcon from '../images/social/linkedin.png';
import tiktokIcon from '../images/social/tiktok.png';

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
                  Sale Compass
                </h3>
                <div className="font-medium text-white text-md">
                  <h5>Meydan Grandstand</h5>
                  <p>6th floor, Meydan Road</p>
                  <p>Nad Al Sheba</p>
                  <p>Dubai, U.A.E</p>
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
                <li className="mb-2">
                  <div
                    className="text-[#013289]"
                  >
                    Mobile App Development
                  </div>
                </li>
                <li className="mb-2">
                  <div
                    className="text-[#013289]"
                  >
                    Website Development
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
                  <SocialLinks />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center px-4 mx-auto md:justify-between">
            <div className="w-full px-4 py-2 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-gray-200">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <Link to="#" className=" hover:text-gray-900">
                  Sale Compass
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
