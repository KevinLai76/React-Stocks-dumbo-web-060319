import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolioStocks: [],
    filterType: 'All',
    sortBy: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(data => this.setState({allStocks: data})
    )
  }

  buyStock = (stock) => {
    this.state.portfolioStocks.includes(stock) 
    ? 
      this.setState({portfolioStocks: [...this.state.portfolioStocks]})
    :
      this.setState({portfolioStocks: [...this.state.portfolioStocks, stock]})
  }

  sellStock = (stock) => {
    let currentPortfolioStocks = [...this.state.portfolioStocks]
    let index = currentPortfolioStocks.indexOf(stock)
    currentPortfolioStocks.splice(index, 1)
    // console.log('state: ', this.state.portfolioStocks)
    // console.log('var: ', currentPortfolioStocks)
    this.setState({
      portfolioStocks: currentPortfolioStocks
    })
  }

  handleSortBy = (event) => {
    console.log(event)
  }

  handleFilterType = (value) => {
    this.setState({
      filterType: value
    })
  }


  render() {

    return (
      <div>
        <SearchBar handleFilterType={this.handleFilterType} handleSortByAphabetically={this.handleSortByAphabetically}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleClick={this.buyStock} allStocks={this.state.allStocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer handleClick={this.sellStock} portfolioStocks={this.state.portfolioStocks}/>

            </div>
          </div>
      </div>
    );
  }
}

export default MainContainer;
