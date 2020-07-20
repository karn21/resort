import React, { Component } from "react";
import "./auth.css";
import { login } from "../../actions/Auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import propTypes from "prop-types";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";

export class Login extends Component {
  static propTypes = {
    login: propTypes.func,
    isAuthenticated: propTypes.bool,
  };

  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/"></Redirect>;
    } else {
      return (
        <Hero hero="authHero">
          <section>
            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="field-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </section>
        </Hero>
      );
    }
  }
}

const matchStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(matchStateToProps, { login })(Login);
