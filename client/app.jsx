import React from 'react';
import Promo from './promo';
import Navigation from './navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div className='navbar-header'>
        <Promo />
        <Navigation />
      </div>
    );
  }
}

export default App;