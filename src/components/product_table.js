import React, { Component } from 'react';
import ProductCategoryRow from './product_category_row';
import ProductRow from './product_row';

export default class ProductTable extends Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    //Creates rows constant set to an empty array.
    const rows = [];
    //Sets lastCategory let variable to null; let means that this variable can be changed after being instantiated.
    let lastCategory = null;

    //Uses ternary operator (looking at whether or not product.category is null) to push either the ProductCategoryRow component or the ProductRow component into the rows constant array. Also passes props (category, product, and key) to both components.
    this.props.product.forEach((product) => {
      console.log(product.name)
        if(product.name.indexOf(filterText) === -1) {
          return;
        }
        if(inStockOnly && !product.stocked) {
          return;
        }
        if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}/>
        );
      }
        rows.push(
          <ProductRow
          product={product}
          key={product.name}/>
        );
      //Sets lastCategory variable to Sporting Goods or Electronics.
      lastCategory = product.category;
    });

    {/*
      This component renders a table with a heading and two columns, with headers of Name and Price. It will also render one row with associated data for each product passed as props.
    */}

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
