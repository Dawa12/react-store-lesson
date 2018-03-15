import React, { Component } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

class AdminView extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        {/* <ProductList /> */}
        <h2>Create a new Product</h2>
        <ProductForm
          addNewProductToProductList={this.props.addNewProductToProductList}
        />
      </div>
    );
  }
}

export default AdminView;
