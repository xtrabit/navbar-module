import React from 'react';
import Trending from './trending';
import Popular from './popular';

class Suggestions extends React.Component {
  render() {
    return (
      <div className='navbar-search-suggestions'>
        <ul className='navbar-suggestions-list'>
          <li className='navbar-suggestions-item'>...</li>
        </ul>
        <Trending />
        <Popular />
      </div>
    );
  }
}

export default Suggestions;