import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-dark navbar-expand-lg `}
      style={{backgroundColor:props.mode==="dark"?"black":"grey"}}
      
    >
      <div  className="container-fluid"  >
        <Link className="navbar-brand" to="/about"  style={{color:props.mode==="dark"?"white":"black"}}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          style={{backgroundColor:props.mode==="dark"?"red":"black"}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home"  style={{color:props.mode==="dark"?"white":"black"}}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"  style={{color:props.mode==="dark"?"white":"black"}}>
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className={`form-check mx-4 form-switch    text-${props.mode==="light"?"dark":"light"}`}>
          <input
            className="form-check-input"
            onClick={props.tooglemode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            
            
          />
          <label className="form-check-label " htmlFor="flexSwitchCheckChecked">
           {`Enable ${props.mode} Mode`}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps={
//     title:"set title here",
//     aboutText:"set aboutText here"
// }
