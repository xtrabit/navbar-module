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
    console.log('window.pageYOffset', window.pageYOffset)
    const wrappedElement = document.body;
    console.log('SCROLL NOW ', wrappedElement.getBoundingClientRect().top)
    if (!this.state.ignore) {
      if (this.isBottom(wrappedElement) && this.state.lock === false) {
        setTimeout(()=>{this.isBottom(wrappedElement) ? this.setState({lock: true}) : null}, 200);
      } else if (!this.isBottom(wrappedElement) && this.state.lock === true) {
        this.setState({lock: false});
      }
    }
  };

  lockPosition() {
    if (this.state.lock === true) {
      return '-fixed';
    }
    return '';
  }

  isBottom(el) {
    return el.getBoundingClientRect().top <= -52;
  }

  ignorePosition() {
    this.setState({ignore: true});
    this.setState({scroll: window.pageYOffset})
  }

  restorePosition() {
    this.setState({ignore: false});
    window.scroll(0, this.state.scroll);
  }

  saveScroll() {
  }

  render() {
    return (
      <div className={'navbar-header' + this.lockPosition()}>
        <Promo />
        <Navigation ignore={this.ignorePosition} restore={this.restorePosition}/>
      </div>
    );
  }
}

export default App;