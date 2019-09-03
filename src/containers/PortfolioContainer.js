import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  makePortfolioStocks = () => {
    return this.props.portfolioStocks.map(portfolioStock => <Stock 
                                                              handleClick={this.props.handleClick} 
                                                              key={portfolioStock.id} 
                                                              stock={portfolioStock} 
                                                            />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.makePortfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
