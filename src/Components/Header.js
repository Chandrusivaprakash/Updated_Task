import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="/blog" className="nav-link">Blog</a>
          </li>
          <li className="nav-item">
            <a href="/support" className="nav-link">Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
