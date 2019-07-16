import React, { Component } from "react";
import Navbar from "./Navbar";
import Products from "./Products";

const BASEURL = "https://api.jsonbin.io/b/5d2da2bd0e90fe4acb2206d7/1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { phones: [] };
  }

  receiveData() {
    fetch(BASEURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "secret-key":
          "$2a$10$nGVP491f5U9BPGHnsqnC4OGdTeRmIz.Rmj0pYy30.pvUoetwWZpSy"
      }
    })
      .then(response => response.json())
      .then(phones => {
        this.setState({ phones });
      });
  }

  componentDidMount() {
    this.receiveData();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Products phones={this.state.phones} />
      </div>
    );
  }
}

export default App;
