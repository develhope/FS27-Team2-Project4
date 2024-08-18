import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({
  bgColor = "bg-green-600",
  textColor = "text-white",
  elementText = "text-white",
  elementBg = "bg-gray-200",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={`${bgColor} ${textColor} p-4`}>
      <div className="flex items-center space-x-4">
        {" "}
        <Link to="/" className="text-2xl font-semibold">
          {" "}
          {/* si deve mettere qui il logo */} Logo{" "}
        </Link>
        <div className="hidden lg:flex items-center space-x-4">
          <NavLink to="/" text="Home" />
          <NavLink to="/about" text="About" />
          <NavLink to="/community" text="Community" />
          <NavLink to="/adozioni" text="Adozioni" />
          <NavLink to="/donate" text="Donazioni" />
          <NavLink to="/shop" text="Shop" />
          <NavLink to="/blog" text="Blog" />
          <DropdownMenu />
          <AuthButtons />
        </div>
     
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

     
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <NavLink to="/" text="Home" mobile />
        <NavLink to="/about" text="About" mobile />
        <NavLink to="/community" text="Community" mobile />
        <NavLink to="/adozioni" text="Adozioni" mobile />
        <NavLink to="/donate" text="Donazioni" mobile />
        <NavLink to="/shop" text="Shop" mobile />
        <NavLink to="/blog" text="Blog" mobile />
        <DropdownMenu mobile />
        <AuthButtons mobile />
      </div>
    </nav>
  );

  function NavLink({ to, text, mobile }) {
    return (
      <Link
        to={to}
        className={`${
          mobile ? "block py-2 px-4" : ""
        } ${elementText} hover:text-pink-300 transition duration-300`}
        onClick={() => mobile && setIsOpen(false)}
      >
        {text}
      </Link>
    );
  }

  function DropdownMenu({ mobile }) {
    return (
      <div className={mobile ? "" : "relative"}>
        <button
          onClick={toggleDropdown}
          className={`${elementText} hover:text-pink-300 transition duration-300 ${
            mobile ? "block w-full text-left py-2 px-4" : ""
          }`}
        >
          Contatti
        </button>
        <ul
          className={`${
            mobile
              ? "pl-4"
              : "absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md"
          } ${dropdownOpen ? "block" : "hidden"}`}
        >
          <li>
            <a
              href="https://www.facebook.com/"
              className={`block px-4 py-2 hover:bg-gray-100 ${
                mobile ? "text-white" : "text-green-600"
              }`}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className={`block px-4 py-2 hover:bg-gray-100 ${
                mobile ? "text-white" : "text-green-600"
              }`}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/home"
              className={`block px-4 py-2 hover:bg-gray-100 ${
                mobile ? "text-white" : "text-green-600"
              }`}
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    );
  }

  function AuthButtons({ mobile }) {
    return (
      <>
        <Link
          to="/login"
          className={`${
            mobile ? "block w-full" : ""
          } bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 ${
            mobile ? "mt-2" : ""
          }`}
          onClick={() => mobile && setIsOpen(false)}
        >
          Accedi
        </Link>
        <Link
          to="/register"
          className={`${
            mobile ? "block w-full" : ""
          } ${elementBg} text-green-600 px-4 py-2 rounded hover:bg-opacity-90 transition duration-300 ${
            mobile ? "mt-2" : ""
          }`}
          onClick={() => mobile && setIsOpen(false)}
        >
          Registrati
        </Link>
      </>
    );
  }
}

export default Navbar;
