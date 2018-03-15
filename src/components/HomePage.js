import React, { Component } from 'react';
import AdminView from './AdminView';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      itemCurrentlyOnSale: 'Glue',
      editSaleItem: true,
      productList: [
        {
          productName: 'Hammer',
          description: "It's a hammer!",
          price: 12.3
        },
        {
          productName: 'Nail',
          description: "It's a nail!",
          price: 0.12
        }
      ]
    };
  }

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({ editSaleItem });
  };

  handleItemCurrentlyOnSaleChange = e => {
    const itemCurrentlyOnSale = e.target.value;
    this.setState({ itemCurrentlyOnSale: itemCurrentlyOnSale });
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
              <input
                type="text"
                value={this.state.itemCurrentlyOnSale}
                onChange={this.handleItemCurrentlyOnSaleChange}
              />
            </div>
          ) : null}

          <AdminView productList={this.state.productList} />
        </div>
      </div>
    );
  }
}

export default HomePage;
