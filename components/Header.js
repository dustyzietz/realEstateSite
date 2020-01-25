import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="flex">
        <div className="brand">
          <a href="/" className="logo">
            NALULA
          </a>
        </div>
        <div id="search-location">
          <h1>Kipo, HI</h1>
        </div>
        <ul className="nav">
          <li>Buy</li>
        </ul>
      </nav>
    </header>
  );
}
