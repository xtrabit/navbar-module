import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hide: true
    };
    this.showCart = this.showCart.bind(this);
    this.hideCart = this.hideCart.bind(this);
    this.launchCart = this.launchCart.bind(this);
  }

  launchCart() {
    this.showCart();
    this.hideCart();
  }

  showCart() {
    this.setState({show: true, hide: false});
  }

  hideCart() {
    this.setState({hide: true});
    setTimeout(() => {
      if (this.state.hide) {
        this.setState({show: false});
      }
    }, 1500);
  }

  renderCart() {
    if (this.state.show) {
      return (
        <div className='navbar-cart-container' onMouseLeave={this.hideCart} onMouseEnter={this.showCart}>
          <h2 className='navbar-cart-header'>
            <span className='navbar-cart-header-qty'>2</span> item added to your bag
          </h2>
          <div className='navbar-cart-item'>
            <div>
              <img className='navbar-cart-item-img' src='https://s3.amazonaws.com/navbarpictures/tshirts/46893517_023_b.jpeg'></img>
            </div>
            <div className='navbar-cart-item-details'>
              <p className='navbar-cart-item-description'>Champion Script Ink Long Sleeve Tee</p>
              <p className='navbar-cart-item-description-price'>39.99</p>
              <p className='navbar-cart-item-description-color'>Grey</p>
              <p className='navbar-cart-item-description-size'>M</p>
            </div>
          </div>
          <button className='navbar-cart-button-checkout'>Checkout</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='navbar-navigation-cart-container'>
        <a href="#" onClick={this.launchCart}>
          <span className='navbar-navigation-cart'>
            <svg height='18' width='18' >
              <title>Bag</title>
              <path id="bag" d="M1 15.34V7.49H15.5v7.85L13.86 17H2.64ZM6.22 2.08 7.3 1H9.14l1.09 1.09V6.5h-4ZM6.89 0 5.22 1.67V6.5H0v9.26L2.23 18h12l2.23-2.24V6.5H11.23V1.68L9.56 0Z"></path>
            </svg>
          </span>
          <span>
            <div className='navbar-navigation-cart-qty'>2</div>
          </span>
        </a>
        {this.renderCart()}
      </div>
    );
  }
}

export default Cart;