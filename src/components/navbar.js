import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r rgb(0, 0, 0), rgb(66, 66, 66)">
      <div className="mx-auto max-w-none px-6 sm:px-8 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h3 className="text-xl font-extrabold text-gray-400 opacity-80">
              PAMO<sup className="text-xs opacity-40">TC</sup>
            </h3>
          </div>
          {/* Navigation Links */}
          <div className="flex-1 flex justify-end">
            <div className="hidden sm:block">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-lg font-medium text-white  hover:text-yellow-400"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 text-lg font-medium text-white  hover:text-yellow-400"
                >
                  About
                </Link>
                <Link
                  to="/tech-stack"
                  className="rounded-md px-3 py-2 text-lg font-medium text-white hover:text-yellow-400"
                >
                  Tech Stack
                </Link>
                <Link
                  to="/education"
                  className="rounded-md px-3 py-2 text-lg font-medium text-white  hover:text-yellow-400"
                >
                  Education
                </Link>
                <Link
                  to="/projects"
                  className="rounded-md px-3 py-2 text-lg font-medium text-white  hover:text-yellow-400"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${mobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/techstack"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Tech Stack
          </Link>
          <Link
            to="/education"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Education
          </Link>
          <Link
            to="/projects"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
