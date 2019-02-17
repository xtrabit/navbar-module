import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showAccount = this.showAccount.bind(this);
    this.hideAccount = this.hideAccount.bind(this);
  }

  showAccount() {
    this.setState({show: true});
  }

  hideAccount() {
    this.setState({show: false});
  }

  render() {
    const {show} = this.state;
    const {signOut} = this.props;
    return (
      <div // eslint-disable-line
        className={show ? 'navbar-navigation-account-selected' : 'navbar-navigation-account'}
        onMouseOver={this.showAccount}
        onMouseLeave={this.hideAccount}
        onKeyPress={this.showAccount}
        onBlur={this.hideAccount}
      >
        <div className='navbar-navigation-account-label' role='menu' tabIndex='0'>My Account</div>
        <svg className={show ? 'navbar-navigation-account-arrow-flipped' : 'navbar-navigation-account-arrow'} viewBox='0 0 14 7.25'>
          <path d='M7.00046,7.67511a0.67237,0.67237,0,0,1-.47771-0.19776L0.19816,1.15359a0.67636,0.67636,0,0,1,0-.95664,0.69214,0.69214,0,0,1,.95746.00041l5.84484,5.844,5.84443-5.84443a0.69242,0.69242,0,0,1,.957,0,0.6766,0.6766,0,0,1,0,.95664l-6.323,6.323A0.67305,0.67305,0,0,1,7.00046,7.67511Z' />
        </svg>
        {show && (
          <div className='navbar-account-dropdown-container'>
            <ul className='navbar-account-dropdown-list'>
              <li>Account Settings</li>
              <li>Addresses + Payments</li>
              <li>Order History</li>
              <li>Wish List</li>
              <li>UO Rewards</li>
              <li onClick={signOut} onKeyPress={signOut} role='menuitem'>Sign Out</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Account;
