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
          <img className='navbar-navigation-logo-image' src='https://images.ctfassets.net/q602vtcuu3w3/1FxU2tlDIYe4yU6cQKKakM/537f61951f8cef4d187d08075623bb45/Valentines_Updated.gif?q=80&w=356'></img>
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