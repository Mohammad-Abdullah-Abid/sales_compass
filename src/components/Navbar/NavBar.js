import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../Navbar/NavLinks";
import logo from "../../images/logo.png";

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 10);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${!top && "bg-white shadow-lg"
        }`}
    >
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex items-center justify-center border-4 border-blue-900 rounded-full">
            <img
              src={logo}
              alt="Sales Compass Logo"
              className="w-10 h-10 rounded-full sm:w-12 sm:h-12 md:w-16 md:h-16"
            />

          </div>
          <h1 className="text-2xl font-extrabold text-blue-900 md:text-4xl">
            Sale Compass
          </h1>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="p-2 text-blue-900 rounded-md lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden space-x-6 lg:flex">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-16 w-full bg-white transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="flex flex-col items-center space-y-4 p-6">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
