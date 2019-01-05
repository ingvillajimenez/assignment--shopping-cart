import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="Grid Grid--expanded">
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
            <button className="AddToCart" onClick={this.props.toggleCart}>
              <span>{this.props.items.length}</span>
              <img src="https://codyhouse.co/demo/quick-add-to-cart/img/cd-icon-cart.svg" alt="Cart Icon" />
            </button>
          </div>
          <div className="container">
            <ul className="Products Grid Grid--expanded">
            {
              this.props.products.map(product => {
                return(
                  <li key={product.sku} className="Product">
                    <div className="Product__cover">
                      <img src={product.images.standard} alt="Product Cover" />
                      <button className="Product__cart" onClick={() => this.props.addToCart(product.sku)}>Add to Cart</button>
                    </div>
                    <div className="Grid Grid--expanded">
                      <strong className="Product__name">{product.names.title}</strong>
                      <strong className="Product__price">{product.prices.current}</strong>
                    </div>
                  </li>
                );
              })
            }
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Home;
