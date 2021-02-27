import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" name="name">
          Shelsy Barrera
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                onClick={(e) => props.nav(e.target.name)}
                className="btn"
                name="about"
              >
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={(e) => props.nav(e.target.name)}
                className="btn"
                name="projects"
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={(e) => props.nav(e.target.name)}
                className="btn"
                name="contact"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
