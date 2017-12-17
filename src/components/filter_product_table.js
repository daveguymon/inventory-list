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
  constructor(props){
    super(props);
    this.state={
      filterText: '',
      inStockOnly: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  //These two handle functions are created in this top-level component and bound to this scope. They are then passed to child components, which will use additional functions to track data changes and then pass them upwards to change this component's state properties.
  handleFilterTextChange(filterText) {
      this.setState({ filterText })
  }

  handleInStockChange(inStockOnly) {
    this.setState({ inStockOnly });
  }
  //Render is a method that returns JSX wrapped in a single element. This is where the UI is rendered.
  render() {
    return (
      <div className="filter-product-table">
      {/*Instance of SearchBar component*/}
      {/*Handle functions being passed as props to child component*/}
        <SearchBar
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        {/*
          Instance of ProductTable component, through which the PRODUCTS array will be passed as the product prop.
        */}
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          product={PRODUCTS}
        />
      </div>
    )
  }
}
