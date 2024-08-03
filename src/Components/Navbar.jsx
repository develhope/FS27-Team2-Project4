import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#92aa7f] text-[#333] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-semibold">
            {/* si deve mettere qui il logo */}
            Logo
          </Link>

          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="/" className="hover:text-[#f6bcba] transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#f6bcba] transition duration-300">
                Chi Siamo
              </Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-[#f6bcba] transition duration-300">
                Community
              </Link>
            </li>
            <li>
              <Link to="/adozioni" className="hover:text-[#f6bcba] transition duration-300">
                Adozioni
              </Link>
            </li>
            <li>
              <Link to="/donate" className="hover:text-[#f6bcba] transition duration-300">
                Donazioni
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-[#f6bcba] transition duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#f6bcba] transition duration-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              onClick={toggleDropdown} 
              className="hover:text-[#f6bcba] transition duration-300"
            >
              Contatti
            </button>
            <ul 
              className={`absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-2 ${dropdownOpen ? "block" : "hidden"}`}
            >
              <li>
                <a href="https://www.facebook.com/" className="block px-4 py-2 hover:bg-gray-100">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="block px-4 py-2 hover:bg-gray-100">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/home" className="block px-4 py-2 hover:bg-gray-100">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <Link to="/login" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
            Accedi
          </Link>
          <Link to="/register" className="bg-white text-black px-4 py-2 rounded border border-black hover:bg-gray-100 transition duration-300">
            Registrati
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
