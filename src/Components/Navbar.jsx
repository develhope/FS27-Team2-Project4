import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ bgColor, textColor, elementText, elementBg }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  console.log("bgColor:", bgColor);
  console.log("textColor:", textColor);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`${bgColor} ${textColor} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-semibold">
            {/* si deve mettere qui il logo */}
            Logo
          </Link>

          <ul className="hidden md:flex space-x-4">
            <li>
              <Link
                to="/home"
                className={`${elementText} hover:text-pink transition duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${elementText} hover:text-pink transition duration-300`}
              >
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className={`${elementText} hover:text-pink transition duration-300`}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                to="/adozioni"
                className={`${elementText} hover:text-pink transition duration-300`}
              >
                Adozioni
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className={`${elementText} hover:text-pink transition duration-300`}
              >
                Donazioni
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={`${elementText} hover:text-pink transition duration-300`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`${elementText} hover:text-pink transition duration-300`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`${elementText} hover:text-pink transition duration-300`}
            >
              Contatti
            </button>
            <ul
              className={`absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-2 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/home"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
          >
            Accedi
          </Link>
          <Link
            to="/register"
            className={`${elementBg} bg-pink text-dark-grey px-4 py-2 rounded  hover:bg-opacity-90 transition duration-300`}
          >
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
