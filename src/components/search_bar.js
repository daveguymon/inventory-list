import React, { Component } from 'react';

export default class SearchBar extends Component {
  //Even though this component does not have any state, we still need a constructor method in order to bind functions created in the component, which will be used to trigger events here and pass those data changes upwards to the parent component (known as Inverse Data Flow).
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  //These functions are passed methods sent via props, which will pass the changes as arguments to the parent component, where those functions will be executed, updating state.
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          className="text-input"
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            value={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock.
        </p>
      </form>
    )
  }
}
