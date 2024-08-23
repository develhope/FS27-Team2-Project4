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
  //si deve wrappare con il CartContext
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//serve per aumentare
  const updateCartCount = (newCount) => {
    setCartCount(newCount);
  };

  return (
    <nav className={`${bgColor} ${textColor} p-4`}>
      <div className="flex items-center justify-between">
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
          <CartIcon count={cartCount} />
          <AuthButtons />
        </div>

        <div className="lg:hidden flex items-center">
          <CartIcon count={cartCount} />
          <button
            onClick={toggleMenu}
            className="ml-4 text-white focus:outline-none"
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
          backgroundColor: "transparent",
          color: "black",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#f6bcb2")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
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
            backgroundColor: "transparent",
            color: "black",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f6bcb2")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
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
              style={{ color: "black" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ec4899")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="block px-4 py-2 transition duration-300"
              style={{ color: "black" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ec4899")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/home"
              className="block px-4 py-2 transition duration-300"
              style={{ color: "black" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#ec4899")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
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

  function CartIcon({ count }) {
    return (
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {/* conteggio carello */}
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            {count}
          </span>
        )}
      </div>
    );
  }
}

export default Navbar;
