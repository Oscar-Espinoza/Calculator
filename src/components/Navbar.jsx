import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <header className="header">
      <h1>Calculator app</h1>
      <nav className="nav">
        <Link
          to="/"
          className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
          onClick={() => setActiveLink('/')}
        >
          Home
        </Link>
        <Link
          to="/Calculator"
          className={`nav-link ${
            activeLink === '/Calculator' ? 'active' : ''
          }`}
          onClick={() => setActiveLink('/Calculator')}
        >
          Calculator
        </Link>
        <Link
          to="/Quote"
          className={`nav-link ${activeLink === '/Quote' ? 'active' : ''}`}
          onClick={() => setActiveLink('/Quote')}
        >
          Quote
        </Link>
      </nav>
    </header>
  );
}
