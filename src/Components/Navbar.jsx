import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({
  bgColor = "bg-green-600",
  textColor = "text-white",
  elementText = "text-black",
  elementBg = "bg-green-600",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={`${bgColor} ${textColor} p-4`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold">
          Logo
        </Link>

        
        <div className="hidden lg:flex flex-grow justify-center space-x-4">
          <NavLink to="/" text="Home" />
          <NavLink to="/about" text="About" />
          <NavLink to="/community" text="Community" />
          <NavLink to="/adozioni" text="Adozioni" />
          <NavLink to="/donate" text="Donazioni" />
          <NavLink to="/shop" text="Shop" />
          <NavLink to="/blog" text="Blog" />
          <DropdownMenu />
        </div>

        
        <div className="hidden lg:flex space-x-4">
          <AuthButtons />
        </div>

        {/* Hamburger Menu */}
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
        className={`
          ${mobile ? "block py-2 px-4" : ""}
          px-4 py-2 rounded
          transition duration-300
        `}
        style={{
          backgroundColor: 'transparent',
          color: 'black'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#f6bcb2'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
          className={`
            px-4 py-2 rounded
            transition duration-300
            ${mobile ? "block w-full text-left py-2 px-4" : ""}
          `}
          style={{
            backgroundColor: 'transparent',
            color: 'black'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f6bcb2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
              className="block px-4 py-2 transition duration-300"
              style={{ color: 'black' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ec4899'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="block px-4 py-2 transition duration-300"
              style={{ color: 'black' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ec4899'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/home"
              className="block px-4 py-2 transition duration-300"
              style={{ color: 'black' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ec4899'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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