import React, { Component } from "react";
import Navbar from "./Navbar";
import Products from "./Products";

const BASEURL =
  "https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  receiveData() {
    fetch(BASEURL)
      .then(response => response.json())
      .then(photos => {
        this.setState({ photos });
      });
  }

  componentDidMount() {
    this.receiveData();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Products photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
