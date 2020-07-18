import React, { Component } from "react";
import "./auth.css";

export class Login extends Component {
  render() {
    return (
      <section>
        <div className="form-container">
          <form action="">
            <div className="field-group">
              <label htmlFor="email">Email *</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="field-group">
              <label htmlFor="password">Password *</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
