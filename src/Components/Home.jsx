import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="bg-[rgb(82,103,66)] text-white fixed top-0 left-0 w-full z-100 p-3">
        <ul className="list-none m-0 p-0 flex justify-around items-center">
          <li>
            <Link
              to="/adozioni"
              className="block p-2 hover:bg-[rgb(146,170,127)] transition duration-300"
            >
              Adozioni
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block p-2 hover:bg-[rgb(146,170,127)] transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="block p-2 hover:bg-[rgb(146,170,127)] transition duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block p-2 hover:bg-[rgb(146,170,127)] transition duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="block p-2 hover:bg-[rgb(146,170,127)] transition duration-300"
            >
              Donazioni
            </Link>
          </li>
          <li className="relative">
            <Link
              to="#"
              className="block p-2 hover:bg-[rgb(146,170,127)] transition duration-300"
            >
              Contatti
            </Link>
            <ul className="hidden absolute top-full left-0 bg-[rgb(246,188,178)] list-none m-0 p-0 min-w-[150px]">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="text-[rgb(30,30,30)] block p-2 hover:bg-[rgb(215,215,215)]"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="text-[rgb(30,30,30)] block p-2 hover:bg-[rgb(215,215,215)]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="main-content p-10 text-center mt-20">
        <h1 className="text-2xl sm:text-4xl text-[#333]">
          Benvenuti al sito di adozioni!
        </h1>
      </div>
    </div>
  );
}

export default Home;
