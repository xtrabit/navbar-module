import React from 'react';
import Suggestions from './suggestions';

class NavSearch extends React.Component {
  render() {
    return (
      <div className='navbar-navigation-search'>
        <div className='navbar-search-anchor'>
          <form className='navbar-search-form'>
            <div className='navbar-search-wrapper'>
              <input className='navbar-search-input' type='search'></input>
            </div>
            <Suggestions />
          </form>
        </div>
      </div>
    );
  }
}

export default NavSearch;