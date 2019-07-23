import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  handleChange = event => {
    this.setState({ username: event.target.value });
  };
  submit() {
    const listProductsFiltered = this.props.phones.filter(product => {
      return product.Brand === this.state.username;
    });
    console.log(listProductsFiltered);
  }
  render() {
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Search Product"
        />
        <button
          onClick={e => {
            this.submit();
          }}
        >
          Filter
        </button>
      </div>
    );
  }
}

export default Search;
