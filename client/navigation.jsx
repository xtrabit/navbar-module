import React from 'react';
import NavMain from './navmain';
import NavLower from './navlower';
import NavSearch from './navsearch';

class Navigation extends React.Component {
  render() {
    return (
      <div className='navbar-header-navigation'>
        <div className='navbar-navigation-logo'>
          <img src='https://images.ctfassets.net/q602vtcuu3w3/1FxU2tlDIYe4yU6cQKKakM/537f61951f8cef4d187d08075623bb45/Valentines_Updated.gif?q=80&w=356'></img>
        </div>
        <div className='navbar-navigation-container'>
          <nav className='navbar-navigation-main'>
            <NavMain />
            <NavLower />
          </nav>
        </div>
        <NavSearch />
        <div className='navbar-navigation-signin'>
          <span>Sign in</span>
        </div>
        <div className='navbar-navigation-cart'>

        </div>
      </div>
    );
  }
}

export default Navigation;