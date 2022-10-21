import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <Link to="/" >
          <img src="Assets/logo-polkadot.svg" width={"150px"} alt="PorkSwap" />
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
                <Link className="nav-link active" aria-current="page" to="/technology">
                  Technology
                </Link>
              </li>{" "}
              &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/community">
                  Community
                </Link>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/blog">
                  Blog
                </Link>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/build">
                  Build
                </Link>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header