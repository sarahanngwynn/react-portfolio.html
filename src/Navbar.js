import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="d-flex justify-content-between">
        <a href="/" title="Homepage">
          {" "}
          Sarah's Portfolio{" "}
        </a>
        <ul>
          <li>
            <a href="/" title="Homepage">
              Home
            </a>
          </li>
          <li>
            <a href="/about.html" title="About Sarah">
              About
            </a>
          </li>
          <li className="active">
            <a href="/work.html" title="Sarah's Work">
              Work
            </a>
          </li>
          <li>
            <a href="/contact.html" title="Contact Sarah">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
