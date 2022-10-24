import React from "react";
import { Link } from "react-router-dom";
import {AiFillGithub , AiFillTwitterCircle} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg uppernav ">
        <div className="container">
        <div className="dropdown">
            <div>

            <a
              className="dropdown-toggle  drop"
              href="/"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >
              EN
            </a>

            <ul class="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  español
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  中文
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  日本語
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  한국어
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  русский
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Türkçe
                </a>
              </li>
            </ul>
            </div>
            
          </div>
{/* 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  Lightpaper
                </a>
              </li>{" "}
              &nbsp; 
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  Whitepaper
                </a>
              </li>
              &nbsp; 
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  Wiki
                </a>
              </li>{" "}
              &nbsp; 
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  <AiFillGithub size={"30px"}/>
                </a>
              </li>
             
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  <FaDiscord size={"30px"}/>
                </a>
              </li>{" "}
             
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  <AiFillTwitterCircle size={"30px"}/>
                </a>
              </li>{" "}
              &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link active support"
                  aria-current="page"
                  href="/"
                >
                  Support
                </a>
              </li>{" "}
            </ul>
          </div>
        </div>
      </nav>
      
      <hr />
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link to="/">
            <img
              src="Assets/logo-polkadot.svg"
              width={"150px"}
              alt="PorkSwap"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active nav-bar-item"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>{" "}
              &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
                <Link
                  className="nav-link active nav-bar-item"
                  aria-current="page"
                  to="/community"
                >
                  Community
                </Link>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <Link
                  className="nav-link active nav-bar-item"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <Link
                  className="nav-link active nav-bar-item"
                  aria-current="page"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <Link
                  className="nav-link active nav-bar-item"
                  aria-current="page"
                  to="/build"
                >
                  Build
                </Link>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <Link
                  className="nav-link active nav-bar-item"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
