import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Navigation and routing
import { handleNavigateAndScroll } from "../../utils/scrollUtils";

const NavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Smooth scroll to About */}
      <span
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 cursor-pointer"
        onClick={() => handleNavigateAndScroll("about", navigate, location)}
      >
        About
      </span>

      {/* Smooth scroll to Services */}
      <span
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 cursor-pointer"
        onClick={() => handleNavigateAndScroll("services", navigate, location)}
      >
        Services
      </span>

      {/* Direct navigation links */}
      <Link
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900 cursor-pointer"
        to="/contact"
      >
        Contact Us
      </Link>
      <Link
        className="inline-flex items-center justify-center w-auto px-6 py-3 text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-xl"
        to="/get-demo"
      >
        Demo our products
      </Link>
    </>
  );
};

export default NavLinks;
