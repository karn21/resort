import React, { Component } from "react";

export class Signup extends Component {
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
              <label htmlFor="firstname">First Name *</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="field-group">
              <label htmlFor="lastname">Last Name *</label>
              <input type="text" placeholder="Enter your username" />
            </div>
            <div className="field-group">
              <label htmlFor="password1">Password *</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="field-group">
              <label htmlFor="password2">Confirm Password *</label>
              <input type="password" placeholder="Enter password again" />
            </div>
            <button type="submit">Signup</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Signup;
