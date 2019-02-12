import React from 'react';
import NavMain from './navmain';
import NavLower from './navlower';
import NavSearch from './navsearch';
import Cart from './cart';

class Navigation extends React.Component {
  render() {
    return (
      <div className='navbar-header-navigation'>
        <div className='navbar-navigation-logo'>
          <img className='navbar-navigation-logo-image' src='valentines_updated.gif'></img>
        </div>
        <div className='navbar-navigation-container'>
          <nav className='navbar-navigation-main'>
            <NavMain />
          </nav>
          <nav className='navbar-navigation-dom'>
            <NavLower />
          </nav>
        </div>
        <NavSearch />
        <div className='navbar-navigation-signin'>
          <a className='navbar-navigation-signin-link' href='#'>Sign in</a>
        </div>
        <Cart />
      </div>
    );
  }
}

export default Navigation;