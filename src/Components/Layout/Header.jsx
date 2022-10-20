import React from 'react'

function Header() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <img src="Assets/logo-polkadot.svg" width={"150px"} alt="PorkSwap" />

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
                <a className="nav-link active" aria-current="page" href="/">
                  Technology
                </a>
              </li>{" "}
              &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Community
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Blog
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Build
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Contact
                </a>
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