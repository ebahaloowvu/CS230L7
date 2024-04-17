import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container justify-content-between">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="navbar-brand" href="#" style={{ fontSize: "20px" }}>
              Navbar
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#" style={{ fontSize: "18px" }}>
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ fontSize: "18px" }}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ fontSize: "18px" }}>
              Contact
            </a>
          </li>
        </ul>
        <form className="form-inline">
          <div className="row">
            <div className="col">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
