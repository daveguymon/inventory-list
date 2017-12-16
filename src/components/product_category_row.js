import React, { Component } from 'react';

export default class ProductCategoryRow extends Component {
  render(){
    //Sets category prop to constant variable of the same name, using ES6 object destructuring.
    const { category } = this.props;
    return (
      <tr colSpan="2">
        <th>{category}</th>
      </tr>
    );
  }
}
