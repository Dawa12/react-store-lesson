import React, { Component } from 'react';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      itemCurrentlyOnSale: 'Glue',
      editSaleItem: true
    };
  }

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({ editSaleItem });
  };

  render() {
    let buttonText = this.state.editSaleItem ? 'Hide' : 'Edit Sale Item';

    return (
      <div>
        <div>
          <h1>My Hardware store</h1>
          <span>Currently on Sale: {this.state.itemCurrentlyOnSale}</span>
          <span>
            <button onClick={this.toggleEditSaleItem}>{buttonText}</button>
          </span>

          {this.state.editSaleItem ? (
            <div>
              <input type="text" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HomePage;
