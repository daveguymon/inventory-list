import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    //Sets product prop to const variable.
    const { product } = this.props;
    //Uses ternary operator to assign name to name (and styling) constant depending on boolean value of stocked key on product prop.
    const name = product.stocked ? product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>

    return (
      <tr>
      {/*
        Renders a name and a price for each individual product that is in the original PRODUCTS array.
      */}
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}
