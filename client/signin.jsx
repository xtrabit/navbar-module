import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'some@email.com'
    };
    this.signIn = this.signIn.bind(this);
    this.hideByClickingBackground = this.hideByClickingBackground.bind(this);
  }

  signIn() {
    this.props.signIn(this.state.user);
    this.props.hide();
  }

  hideByClickingBackground(e) {
    if (e.target.className === 'navbar-signin-background') {
      this.props.hide();
    }
  }

  render() {
    if (this.props.show) {
      return (
        <div
          className='navbar-signin-background'
          onClick={this.hideByClickingBackground}
          role='presentation'
        >
          <div className='navbar-signin'>
            <svg className='navbar-signin-x-icon' onClick={this.props.hide}>
              <title>Close</title>
              <rect x='-3.29308' y='8.98556' width='24.58615' height='0.86969' transform='translate(-4.0252 9.12314) rotate(-45)' />
              <rect x='8.56515' y='-2.87267' width='0.86969' height='24.58615' transform='translate(-4.0252 9.12314) rotate(-45)' />
            </svg>
            <h2 className='navbar-signin-header'> SIGN IN</h2>
            <form className='navbar-signin-form'>
              <div className='navbar-signin-emai'>
                <label htmlFor='email'>
                  Email *
                  <input id='email' type='email' name='email' spellCheck='false' value={this.state.user} onChange={() => {}} />
                </label>
              </div>
              <div className='navbar-signin-password'>
                <label htmlFor='password'>
                  Password *
                  <input id='password' type='password' name='password' spellCheck='false' value='password' onChange={() => {}} />
                </label>
              </div>
              <div className='navbar-signin-forgot-link-wrapper'>
                <a className='navbar-signin-forgot-link' href='#'>Forgot Your Password?</a>
              </div>
              <div className='navbar-signin-controls'>
                <button className='navbar-signin-button-signin' type='button' onClick={this.signIn}>Sign In</button>
                <button className='navbar-signin-button-cancel' type='button' onClick={this.props.hide}>Cancel</button>
              </div>
            </form>
            <div className='navbar-signin-login'>
              <button className='navbar-signin-button-create' type='button'>Create an Account</button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default SignIn;
