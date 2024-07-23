import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/adozioni">Adozioni</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/donate">Donazioni</Link>
          </li>
          <li>
            Contatti
            <ul>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <h1>Benvenuti al sito di adozioni!</h1>
      </div>
    </div>
  );
}

export default Home;
