import React, { Component } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { connect } from "react-redux";
import { logout } from "../actions/Auth";
import propTypes from "prop-types";

class Navbar extends Component {
  static propTypes = {
    isAuthenticated: propTypes.bool,
    logout: propTypes.func,
  };

  state = {
    isOpen: false,
  };

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" onClick={this.toggleNav} />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms/">Rooms</Link>
            </li>
            {this.props.isAuthenticated ? (
              <li>
                <a href="#" onClick={this.props.logout}>
                  Logout
                </a>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login/">Login</Link>
                </li>
                <li>
                  <Link to="/register/">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const matchStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(matchStateToProps, { logout })(Navbar);
