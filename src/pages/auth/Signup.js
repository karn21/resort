import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/Auth";
import propTypes from "prop-types";
import Hero from "../../components/Hero";

export class Signup extends Component {
  static propTypes = {
    register: propTypes.func,
  };

  state = {
    firstname: "",
    lastname: "",
    email: "",
    password1: "",
    password2: "",
    username_error: false,
    password_error: false,
  };

  handleChange = (e) => {
    switch (e.target.name) {
      case "password1":
        this.state.password2 === e.target.value
          ? this.setState({
              password_error: false,
            })
          : this.setState({
              password_error: true,
            });
        break;
      case "password2":
        this.state.password1 === e.target.value
          ? this.setState({
              password_error: false,
            })
          : this.setState({
              password_error: true,
            });
        break;
      default:
        return;
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password1 === this.state.password2) {
      this.props.register(
        this.state.email,
        this.state.firstname,
        this.state.lastname,
        this.state.password1
      );
    } else {
      this.setState({
        password_error: true,
      });
    }
  };

  render() {
    return (
      <Hero hero="authHero">
        <section>
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="field-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field-group">
                <label htmlFor="firstname">First Name *</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field-group">
                <label htmlFor="lastname">Last Name *</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field-group">
                <label htmlFor="password1">Password *</label>
                <input
                  type="password"
                  name="password1"
                  placeholder="Enter your password"
                  value={this.state.password1}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field-group">
                <label htmlFor="password2">Confirm Password *</label>
                <input
                  type="password"
                  name="password2"
                  placeholder="Enter password again"
                  value={this.state.password2}
                  onChange={this.handleChange}
                />
                {this.state.password_error && (
                  <p style={{ color: "#F58F1B", textAlign: "left" }}>
                    The passwords do not match
                  </p>
                )}
              </div>

              <button type="submit">Signup</button>
            </form>
          </div>
        </section>
      </Hero>
    );
  }
}

export default connect(null, { register })(Signup);
