import { Component } from "react";
import "./Navbar.css";
import logo from "../../images/white-logo.svg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="img-fluid w-50" src={logo} alt="logo" />
          </a>

      {/*     <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a type="button" className="btn-color ">
              Get It Now
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
