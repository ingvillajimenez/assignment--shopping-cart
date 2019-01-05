import React, { Component } from 'react';

import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      products: [],
      items: []
    };

    this.toggleCart = this.toggleCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  componentDidMount() {
    const API_KEY = 'IVWpllTSZDQlUoxDPN1NEWM1';
    fetch(`https://api.bestbuy.com/beta/products/mostViewed?apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          products: myJson.results
        });
      })
  }

  toggleCart() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  addToCart(sku) {
    let item = this.state.products.filter(product => product.sku === sku);
    let differentItems = this.state.items.every(item => item.sku !== sku);
    if(differentItems) {
      this.setState({
        items: this.state.items.concat(item)
      });
    } 
  }

  deleteFromCart(sku) {
    let newItems = this.state.items.filter(item => item.sku !== sku);
    this.setState({
      items: newItems,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Home 
        toggleCart={this.toggleCart} 
        products={this.state.products} 
        items={this.state.items} 
        addToCart={this.addToCart} />
        <ShoppingCart 
        toggleCart={this.toggleCart} 
        toggle={this.state.toggle} 
        items={this.state.items} 
        deleteFromCart={this.deleteFromCart} />
      </React.Fragment>
    );
  }
}

export default App;
