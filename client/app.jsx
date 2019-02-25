import React from 'react';
import Promo from './promo';
import Navigation from './navigation';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lock: false,
      ignore: false,
      scroll: 0,
      lastItem: null,
      user: 'anonymous',
      qty: 0
    };
    this.trackScrolling = this.trackScrolling.bind(this);
    this.ignorePosition = this.ignorePosition.bind(this);
    this.restorePosition = this.restorePosition.bind(this);
    this.addRandomItemToCart = this.addRandomItemToCart.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.emptyAnonymousCart = this.emptyAnonymousCart.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    window.addEventListener('beforeunload', this.emptyAnonymousCart);
    let productID = new URLSearchParams(window.location.search).get('productID');
    if (productID && !isNaN(Number(productID)) && Number(productID) < 101) {
      let tempItem = {};
      tempItem.id = productID;
      this.addItemToCart(tempItem);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
    window.removeEventListener('beforeunload', this.emptyAnonymousCart);
  }

  emptyAnonymousCart() {
    fetch(`${process.env.MY_URL}/emptycart/anonymous`)
      .catch(err => console.error(err));
  }

  trackScrolling() {
    const {ignore, lock} = this.state;
    if (!ignore) {
      if (this.isBottom() && lock === false) {
        setTimeout(() => this.isBottom() && this.setState({lock: true}), 200);
      } else if (!this.isBottom() && lock === true) {
        this.setState({lock: false});
      }
    }
  }

  lockPosition() {
    const {lock} = this.state;
    return lock === true ? '-fixed' : '';
  }

  isBottom() {
    return window.pageYOffset >= 52;
  }

  ignorePosition() {
    this.setState({ignore: true, scroll: window.pageYOffset});
  }

  restorePosition() {
    const {scroll} = this.state;
    this.setState({ignore: false});
    window.scroll(0, scroll);
  }

  addRandomItemToCart() {
    const {user} = this.state;
    fetch(`${process.env.MY_URL}/addrandomtocart/${user}`)
      .then(res => res.json())
      .then(res => this.setState({lastItem: res.item, qty: res.qty}))
      .catch(err => console.error(err));
  }

  addItemToCart(item) {
    const {user} = this.state;
    fetch(`${process.env.MY_URL}/addtocart/${user}/${item.id}`)
      .then(res => res.json())
      .then(res => this.setState({lastItem: res.item, qty: res.qty}))
      .catch(err => console.error(err));
  }

  signIn(user) {
    this.setState({user}, () => {
      fetch(`${process.env.MY_URL}/signin/${user}`)
        .then(res => res.json())
        .then(res => this.setState({qty: res}))
        .catch(err => console.error(err));
    });
  }

  signOut() {
    this.setState({user: 'anonymous', lastItem: null, qty: 0});
    this.emptyAnonymousCart();
  }

  render() {
    const {
      scroll,
      lastItem,
      qty,
      user
    } = this.state;
    return (
      <div>
        <div className={`navbar-header${this.lockPosition()}`}>
          <Promo addRandomItemToCart={this.addRandomItemToCart} />
          <Navigation
            addItemToCart={this.addItemToCart}
            restore={this.restorePosition}
            ignore={this.ignorePosition}
            signOut={this.signOut}
            signIn={this.signIn}
            position={scroll}
            item={lastItem}
            user={user}
            qty={qty}
          />
        </div>
        <div className={`navbar-header-empty${this.lockPosition()}`} />
        {//<img src='top.png' alt='' />
        //<img src='mid.png' alt='' />
        }
      </div>
    );
  }
}

export default Nav;
