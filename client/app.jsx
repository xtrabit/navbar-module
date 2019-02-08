import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div>
      <img src='https://s3.amazonaws.com/navbarpictures/tshirts/40079881_023_b.jpeg'></img>
        <h2>what's up</h2>
      </div>
    );
  }
}

export default App;