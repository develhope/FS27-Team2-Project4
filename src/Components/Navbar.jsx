import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import Logo from "../../public/SVG/LOGO-SITO.png";
function Navbar({
  bgColor = "bg-green-600",
  textColor = "text-white",
  elementBg = "bg-green-600",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { cartCount } = useContext(CartContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={`${bgColor} ${textColor} py-4 px-8`}>
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">
          <img src={Logo} alt="logo" className="h-12" />
        </Link>

        <div className="hidden lg:flex flex-grow justify-center space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            Chi siamo
          </Link>
          <Link to="/community" className="hover:underline">
            Community
          </Link>
          <Link to="/adozioni" className="hover:underline">
            Adozioni
          </Link>
          <Link to="/donate" className="hover:underline">
            Donazioni
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/cart">
            <CartIcon count={cartCount} />
          </Link>
          <AuthButtons />
        </div>

        <div className="lg:hidden flex items-center">
          <Link to="/cart" className="mr-4">
            <CartIcon count={cartCount} />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              fill="currentColor"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          isOpen ? "flex flex-col gap-4" : "hidden"
        } mt-4`}
      >
        {/* Mobile  */}
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/c" className="hover:underline">
          Chi siamo
        </Link>
        <Link to="/community" className="hover:underline">
          Community
        </Link>
        <Link to="/adozioni" className="hover:underline">
          Adozioni
        </Link>
        <Link to="/donate" className="hover:underline">
          Donazioni
        </Link>
        <Link to="/shop" className="hover:underline">
          Shop
        </Link>
        <Link to="/about" className="hover:underline">
          Contatti
        </Link>
        <AuthButtons mobile />
      </div>
    </nav>
  );

  function AuthButtons({ mobile }) {
    return (
      <>
        <Link
          to="/login"
          className={`${
            mobile ? "block w-full" : ""
          } bg-gray-800 text-white  py-2 rounded hover:bg-gray-700 transition duration-300
          }`}
          onClick={() => mobile && setIsOpen(false)}
        >
          Accedi
        </Link>
        <Link
          to="/signIn"
          className={`${
            mobile ? "block w-full" : ""
          } ${elementBg} text-green-600 px-4 py-2 rounded hover:bg-opacity-90 transition duration-300 ${
            mobile ? "mt-0" : ""
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
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 bg-light-blue text-white text-xs rounded-full px-1">
            {count}
          </span>
        )}
      </div>
    );
  }
}

export default Navbar;
