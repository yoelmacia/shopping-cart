import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="container">
          Shopping
          <ul className="right">
            <li> My Cart </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
