import React, { Component } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  receiveData() {
    const BASEURL = "https://jsonplaceholder.typicode.com/albums/1/photos";
    fetch(BASEURL)
      .then(response => response.json())
      .then(json => console.log(json));
  }

  componentWillMount() {
    this.receiveData();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Product />
      </div>
    );
  }
}

export default App;
