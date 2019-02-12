import React from 'react';

class Trending extends React.Component {
  render() {
    return (
      <div className='navbar-search-trending'>
        <h3 className='navbar-trending'>Trending</h3>
        <ul className='navbar-trending-list'>
          <li className='navbar-trending-item'>Kappa</li>
          <li className='navbar-trending-item'>Champion</li>
        </ul>
      </div>
    );
  }
}

export default Trending;