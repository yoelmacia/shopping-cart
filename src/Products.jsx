import React, { Component } from "react";
import "./Products.css";

class Products extends Component {
  render() {
    const phones = [];
    const values = Object.values(this.props);

    values.forEach(x => {
      x.forEach(y => {
        phones.push(y);
      });
    });

    const listProducts = phones.map((product, index) => (
      <div key={index}>
        <div className="product">
          <img className="photo" alt="" src={product.Photo} />
          <div>Brand: {product.Brand}</div>
          <div>Model: {product.Model}</div>
          <div>Ram: {product.RAM}</div>
          <div>Storage: {product.Storage}</div>
          <div>Processor: {product.Processor}</div>
          <div>Screen: {product.Screen}</div>
          <div>Dualsim: {product.Dualsim}</div>
        </div>
      </div>
    ));

    return <div>{listProducts}</div>;
  }
}

export default Products;
