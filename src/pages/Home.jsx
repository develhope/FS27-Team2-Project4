import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/adozioni">Adozioni</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/donate">Donazioni</Link></li>
          <li>
            Contatti
            <ul>
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://www.instagram.com/">Instagram</a></li>
             
            </ul>
          </li>
        </ul>
      </nav>

      
      <h1>Benvenuti al sito di adozioni!</h1>
    
    </div>
  );
}

export default Home;
