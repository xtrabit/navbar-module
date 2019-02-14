import React from 'react';
import NavMain from './navmain';
import NavLower from './navlower';
import NavSearch from './navsearch';
import Cart from './cart';
import SignIn from './signin';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showSignin(e) {
    e.preventDefault();
    this.props.ignore();
    document.body.style.setProperty('overflow', 'hidden');
    this.setState({show: true}, () => window.scroll(0, this.props.position));
  }

  hideSignin() {
    this.setState({show: false});
    this.props.restore();
    document.body.style.setProperty('overflow', 'visible');
  }

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
          <a className='navbar-navigation-signin-link' href='#' onClick={(e)=>this.showSignin(e)}>Sign in</a>
          <SignIn show={this.state.show} hide={()=>this.hideSignin()} signIn={this.props.signIn}/>
        </div>
        <Cart item={this.props.item} qty={this.props.qty}/>
      </div>
    );
  }
}

export default Navigation;