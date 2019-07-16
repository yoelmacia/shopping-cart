import React, { Component } from "react";

class Products extends Component {
  render() {
    const entries = Object.entries(this.props.photos);
    console.log(entries);
    return (
      <div>
        <span>hola</span>
        <span>Name: Product 1</span>
        <span>Description: Blablabla 1</span>
        <span>Icon Add Cart 1 </span>
      </div>
    );
  }
}

export default Products;
