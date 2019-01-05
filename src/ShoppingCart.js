import React, { Component } from "react";

class ShoppingCart extends Component {
  calculateTotal() {
    const prices = this.props.items.map(item => item.prices.current);

    return prices.reduce((a, b) => a + b, 0).toFixed(2);
  }
  render() {
    return (
      <aside>
        <div className={(this.props.toggle)?"ShoppingCart is-visible":"ShoppingCart"}>
          <header className="ShoppingCart__header">
            <div>
              <h3 className="ShoppingCart__title">Your Cart</h3>
              <button className="ShoppingCart__close" onClick={this.props.toggleCart}>
                <img src="https://cdn3.iconfinder.com/data/icons/interface/100/close_button-512.png" alt="Close Icon" />
              </button>
            </div>
          </header>
          <div>
            <ul className="ShoppingCart__list">
            {
              this.props.items.map(item => {
                return(
                  <li className="Grid Item">
                    <div className="Item__Cover">
                      <img src={item.images.standard} alt="Item Cover"/>
                    </div>
                    <div className="Item__Description">
                      <div>
                        <div className="Grid Grid--expanded">
                          <div>
                            <h3>{item.names.title}</h3>
                            <span>{item.descriptions.short}</span>
                          </div>
                          <div>
                            <button><i className="fa fa-trash" onClick={() => this.props.deleteFromCart(item.sku)} /></button>
                          </div>
                        </div>
                      </div>
                      <div className="Grid Grid--expanded Grid--center Item--ts">
                        <select>
                          <option>1</option>
                        </select>
                        <p>{item.prices.current}</p>
                      </div>
                    </div>
                  </li>
                );
              })
            }
            </ul>
            <footer>
              <div className="Grid Grid--expanded">
                <span>Subtotal:</span>
                <strong>{this.calculateTotal()}</strong>
              </div>
              <button>Checkout</button>
            </footer>
          </div>
        </div>
      </aside>
    );
  }
}

export default ShoppingCart;
