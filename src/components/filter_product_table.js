//Import statements make dependencies and components housed in external files accessible within this file.
import React, { Component } from 'react';
import SearchBar from './search_bar';
import ProductTable from './product_table';

//Array of objects representing products will be passed as props to child components, where they will be rendered.
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

//As the parent-most component of child components who will share data, this component will house state.
export default class FilterProductTable extends Component {

  //Render is a method that returns JSX wrapped in a single element. This is where the UI is rendered.
  render() {
    return (
      <div>
      {/*Instance of SearchBar component*/}
        <SearchBar />
        {/*
          Instance of ProductTable component, through which the PRODUCTS array will be passed as the product prop.
        */}
        <ProductTable product={PRODUCTS}/>
      </div>
    )
  }
}
