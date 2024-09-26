import React from "react";

interface HamburgerProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <button
      onClick={toggleMenu}
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-200 sm:hidden"
      aria-controls="navbar-sticky"
      aria-expanded={isMenuOpen}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className={`w-5 h-5 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "rotate-45" : ""
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          className={`transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-1 rotate-45" : ""
          }`}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15"
        />
        <path
          className={`transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 7h15"
        />
        <path
          className={`transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "-translate-y-1 -rotate-45" : ""
          }`}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 13h15"
        />
      </svg>
    </button>
  );
};
