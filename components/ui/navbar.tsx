"use client";
import Image from "next/image";
import { useState } from "react";
import { Hamburger } from "../hamburger";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-b ">
      <div className="flex items-center justify-between   md:flex-wrap md:mx-60">
        {/* Logo */}
        <div className="flex items-center">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg> */}
        <Image alt="profile pic" src="/profile.jpeg" width={80}  height={40} className="p-4  rounded-full hover:animate-pulse "></Image>

          <a className="text-3xl uppercase focus:ring-4   py-2 flex title-font  hover:bg-gray-100 font-semibold   ml-2" href="/">
            Venky
            <span className="text-blue-500">.</span>
          </a>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="sm:hidden">
          <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        {/* Menu links for larger screens */}
        <div className="hidden sm:flex space-x-8 text-lg font-bold">
          <a
            href="#blogs"
            className="hover:text-green-500 transition-colors duration-200"
          >
            Blogs
          </a>
          <a
            href="/projects"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#aboutme"
            className="hover:text-red-400 transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="#resume"
            className="hover:text-green-400 transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Button for hiring on all screens */}
        <div className="hidden lg:flex text-gray-950 font-bold border rounded-md p-2 md:p-4">
          Hire Me
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white shadow-md z-50 p-6 transition-transform transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } sm:hidden`}
      >
        <div className="flex flex-col space-y-4">
          <a
            href="/blogs"
            className="text-lg font-bold hover:text-green-500 transition-colors duration-200"
          >
            Blogs
          </a>
          <a
            href="/projects"
            className="text-lg font-bold hover:text-blue-500 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="/aboutme"
            className="text-lg font-bold hover:text-red-400 transition-colors duration-200"
          >
            About Me
          </a>
          <a
            href="/resume"
            className="text-lg font-bold hover:text-green-400 transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
