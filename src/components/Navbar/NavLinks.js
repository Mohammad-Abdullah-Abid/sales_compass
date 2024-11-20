import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Navigation and routing
import { scroller } from "react-scroll"; // Smooth scrolling

const NavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle scrolling and navigation
  const handleNavigateAndScroll = (section) => {
    if (location.pathname !== "/") {
      // Navigate to the home page first
      navigate("/");
    }

    // Delay to ensure the navigation is completed
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70, // Offset for sticky navbar height
      });
    }, 100); // Adjust delay if needed
  };

  return (
    <>
      {/* Smooth scroll to About */}
      <span
        className="px-4 font-extrabold text-gray-500 cursor-pointer hover:text-blue-900"
        onClick={() => handleNavigateAndScroll("about")}
      >
        About
      </span>

      {/* Smooth scroll to Services */}
      <span
        className="px-4 font-extrabold text-gray-500 cursor-pointer hover:text-blue-900"
        onClick={() => handleNavigateAndScroll("services")}
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
