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
    this.clearTimeout = null;
  }

  componentDidUpdate(prevProps) {
    const {qty, item} = this.props;
    if (qty !== prevProps.qty && item) {
      this.launchCart();
    }
  }

  launchCart() {
    this.showCart();
    this.hideCart();
  }

  showCart() {
    this.setState({show: true, hide: false});
    clearTimeout(this.clearTimeout);
  }

  hideCart() {
    this.setState({hide: true});
    this.clearTimeout = setTimeout(() => {
      if (this.state.hide) { // destructuring breaks this code ???
        this.setState({show: false});
      }
    }, 2000);
  }

  renderCart() {
    const {show} = this.state;
    const {item} = this.props;
    if (show && item) {
      return (
        <div className='navbar-cart-container' onMouseLeave={this.hideCart} onMouseEnter={this.showCart}>
          <h2 className='navbar-cart-header'>
            <span className='navbar-cart-header-qty'>1 </span>
            item added to your bag
          </h2>
          <div className='navbar-cart-item'>
            <div>
              <img className='navbar-cart-item-img' src={item.image_url} alt='' />
            </div>
            <div className='navbar-cart-item-details'>
              <p className='navbar-cart-item-description'>{item.item_name}</p>
              <p className='navbar-cart-item-description-price'>{item.price}</p>
              <p className='navbar-cart-item-description-color'>{item.color}</p>
              <p className='navbar-cart-item-description-size'>{item.size}</p>
            </div>
          </div>
          <button className='navbar-cart-button-checkout' type='button'>Checkout</button>
        </div>
      );
    }
    return null;
  }

  render() {
    const {qty} = this.props;
    return (
      <div className='navbar-navigation-cart-container'>
        <a>
          <span className='navbar-navigation-cart'>
            <svg height='18' width='18'>
              <title>Bag</title>
              <path id='bag' d='M1 15.34V7.49H15.5v7.85L13.86 17H2.64ZM6.22 2.08 7.3 1H9.14l1.09 1.09V6.5h-4ZM6.89 0 5.22 1.67V6.5H0v9.26L2.23 18h12l2.23-2.24V6.5H11.23V1.68L9.56 0Z' />
            </svg>
          </span>
          <span>
            {qty ? <div className='navbar-navigation-cart-qty'>{qty}</div> : null}
          </span>
        </a>
        {this.renderCart()}
      </div>
    );
  }
}

export default Cart;
