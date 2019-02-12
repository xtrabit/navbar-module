import React from 'react';
import Promo from './promo';
import Navigation from './navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lock: false
    }
    this.trackScrolling = this.trackScrolling.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling () {
    const wrappedElement = document.body;
    if (this.isBottom(wrappedElement) && this.state.lock === false) {
      setTimeout(()=>{this.isBottom(wrappedElement) ? this.setState({lock: true}) : null}, 200);
    } else if (!this.isBottom(wrappedElement) && this.state.lock === true) {
      this.setState({lock: false});
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

  render() {
    return (
      <div className={'navbar-header' + this.lockPosition()}>
        <Promo />
        <Navigation />
      </div>
    );
  }
}

export default App;