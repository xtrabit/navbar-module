import React from 'react';
import NavMain from './navmain';
import NavLower from './navlower';
import NavSearch from './navsearch';
import Cart from './cart';
import SignIn from './signin';
import Account from './account';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      user: 'anonymous'
    };
  }

  componentDidUpdate(prevProps) {
    const {user} = this.props;
    if (user !== prevProps.user) {
      this.setState({user});
    }
  }

  showSignin(e) {
    const {ignore} = this.props; // destructuring here prevents position from updating???
    e.preventDefault();
    ignore();
    document.body.style.setProperty('overflow', 'hidden');
    this.setState({showSignIn: true}, () => window.scroll(0, this.props.position)); // eslint-disable-line
  }

  hideSignin() {
    const {restore} = this.props;
    this.setState({showSignIn: false});
    restore();
    document.body.style.setProperty('overflow', 'visible');
  }

  render() {
    const {
      user,
      addItemToCart,
      signOut,
      signIn,
      item,
      qty
    } = this.props;
    return (
      <div className='navbar-header-navigation'>
        <div className='navbar-navigation-logo'>
          <img className='navbar-navigation-logo-image' src='http://localhost:3001/valentines_updated.gif' alt='' />
        </div>
        <div className='navbar-navigation-container'>
          <nav className='navbar-navigation-main'>
            <NavMain />
          </nav>
          <nav className='navbar-navigation-dom'>
            <NavLower />
          </nav>
        </div>
        <NavSearch user={user} addItemToCart={addItemToCart} />
        <div className='navbar-navigation-signin'>
          {this.state.user === 'anonymous'
            ? <a className='navbar-navigation-signin-link' href='#' onClick={e => this.showSignin(e)}>Sign in</a>
            : <Account signOut={signOut} />}
          <SignIn show={this.state.showSignIn} hide={() => this.hideSignin()} signIn={signIn} />
        </div>
        <Cart item={item} qty={qty} />
      </div>
    );
  }
}

export default Navigation;
