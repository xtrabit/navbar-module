import React from 'react';

class Trending extends React.Component {

  getTrending() {
    let list = ['champion', 'guess', 'kappa', 'vans', 'dr martens'];
    return list.map((item) => {
      return (
        <li className='navbar-trending-item' key={item}>
          <p>{item}</p>
        </li>
      );
    });
  }

  getSuggestion() {
    let list = ['down', 'button down', 'dos', 'button down shirt', 'down shirt'];
    return list.map((item) => {
      return (
        <li className='navbar-suggestions-item' key={item}>
          <p>{item}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div className='navbar-search-trending'>
        <ul className='navbar-suggestions-list'>
          {this.getSuggestion()}
        </ul>
        <h3 className='navbar-trending-header'>TRENDING</h3>
        <ul className='navbar-trending-list'>
            {this.getTrending()}
        </ul>
      </div>
    );
  }
}

export default Trending;
