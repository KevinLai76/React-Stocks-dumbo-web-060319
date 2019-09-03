import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  makeStocks = () => {
    return this.props.allStocks.map(stock => <Stock 
                                                handleClick={this.props.handleClick} 
                                                key={stock.id} 
                                                stock={stock}
                                              />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.makeStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
