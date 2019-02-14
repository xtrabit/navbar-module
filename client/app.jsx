import React from 'react';
import Promo from './promo';
import Navigation from './navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lock: false,
      ignore: false,
      scroll: 0
    }
    this.trackScrolling = this.trackScrolling.bind(this);
    this.ignorePosition = this.ignorePosition.bind(this);
    this.restorePosition = this.restorePosition.bind(this);
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

  render() {
    return (
      <div>
        <div className={'navbar-header' + this.lockPosition()}>
          <Promo />
          <Navigation ignore={this.ignorePosition} restore={this.restorePosition} position={this.state.scroll}/>
        </div>
        <div className={'navbar-header-empty' + this.lockPosition()}></div>
        <img src='top.png'></img>
        <img src='mid.png'></img>
      </div>
    );
  }
}

export default App;