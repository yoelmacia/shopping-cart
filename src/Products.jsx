import React, { Component } from "react";
import "./Products.css";

class Products extends Component {
  render() {
    const listProducts = this.props.phones.map((product, index) => (
      <div key={index} className="product">
        <img className="photo" alt="" src={product.Photo} />
        <div className="feature">
          <div>Brand: {product.Brand}</div>
          <div>Model: {product.Model}</div>
          <div>Ram: {product.RAM}</div>
          <div>Storage: {product.Storage}</div>
          <div>Processor: {product.Processor}</div>
          <div>Screen: {product.Screen}</div>
          <div>Dualsim: {product.Dualsim}</div>
          <button
            onClick={e => {
              this.props.sortData(product.Brand);
            }}
          >
            Sort Me
          </button>
        </div>
      </div>
    ));

    return (
      <div>
        <h3 className="center">Mobile Phones</h3>
        <div className="box">{listProducts}</div>
      </div>
    );
  }
}

export default Products;
