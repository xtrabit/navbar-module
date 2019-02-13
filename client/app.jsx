import React from 'react';
import Promo from './promo';
import Navigation from './navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lock: false,
      ignore: false,
      scroll: 0,
      lastItem: null,
      user: 'anonymous'
    }
    this.trackScrolling = this.trackScrolling.bind(this);
    this.ignorePosition = this.ignorePosition.bind(this);
    this.restorePosition = this.restorePosition.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling () {
    if (!this.state.ignore) {
      if (this.isBottom() && this.state.lock === false) {
        setTimeout(()=>{this.isBottom() ? this.setState({lock: true}) : null}, 200);
      } else if (!this.isBottom() && this.state.lock === true) {
        this.setState({lock: false});
      }
    }
  };

  lockPosition() {
    return this.state.lock === true ? '-fixed' : '';
  }

  isBottom() {
    return window.pageYOffset >= 52;
  }

  ignorePosition() {
    this.setState({ignore: true, scroll: window.pageYOffset});
  }

  restorePosition() {
    this.setState({ignore: false});
    window.scroll(0, this.state.scroll);
  }

  addItemToCart() {
    fetch(`http://localhost:3001/addtocart/${this.state.user}`)
    .then(res => res.json())
    .then(res => this.setState({lastItem: res}))
    .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <div className={'navbar-header' + this.lockPosition()}>
          <Promo addItemToCart={this.addItemToCart}/>
          <Navigation ignore={this.ignorePosition}
            restore={this.restorePosition}
            position={this.state.scroll}
            item={this.state.lastItem}/>
        </div>
        <div className={'navbar-header-empty' + this.lockPosition()}></div>
        <img src='top.png'></img>
        <img src='mid.png'></img>
      </div>
    );
  }
}

export default App;