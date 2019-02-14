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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user !== prevProps.user) {
      this.setState({user: this.props.user});
    }
  }

  showSignin(e) {
    e.preventDefault();
    this.props.ignore();
    document.body.style.setProperty('overflow', 'hidden');
    this.setState({showSignIn: true}, () => window.scroll(0, this.props.position));
  }

  hideSignin() {
    this.setState({showSignIn: false});
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
        <NavSearch user={this.props.user}/>
        <div className='navbar-navigation-signin'>
          {this.state.user === 'anonymous'
            ? <a className='navbar-navigation-signin-link' href='#' onClick={(e)=>this.showSignin(e)}>Sign in</a>
            : <Account signOut={this.props.signOut}/>}
          <SignIn show={this.state.showSignIn} hide={()=>this.hideSignin()} signIn={this.props.signIn}/>

        </div>
        <Cart item={this.props.item} qty={this.props.qty}/>
      </div>
    );
  }
}

export default Navigation;