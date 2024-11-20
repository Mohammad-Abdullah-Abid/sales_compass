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
        className="px-4 font-extrabold text-gray-500 cursor-pointer hover:text-blue-900"
        to="/contact"
      >
        Contact Us
      </Link>

    </>
  );
};

export default NavLinks;
