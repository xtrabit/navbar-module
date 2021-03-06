import React from 'react';
import Menu from './menu';

class NavMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      hideMenu: true,
      menuName: '',
      nextMenuName: ''
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.delayHide = this.delayHide.bind(this);
    this.delayShow = this.delayShow.bind(this);
    this.clearHideMenu = this.clearHideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    if (this.state.nextMenuName === event.target.innerHTML && this.state.hideMenu !== true) {
      this.setState({showMenu: true});
      this.setState({menuName: event.target.innerHTML});
    }
  }

  hideMenu(event) {
    event.preventDefault();
    if (this.state.hideMenu === true) {
      this.setState({showMenu: false});
    }
  }

  delayHide(event) {
    event.persist();
    this.setState({hideMenu: true});
    setTimeout(this.hideMenu.bind(this, event), 400);
  }

  delayShow(event) {
    event.persist();
    this.setState({hideMenu: false});
    this.setState({nextMenuName: event.target.innerHTML});
    setTimeout(this.showMenu.bind(this, event), 400);
  }

  clearHideMenu() {
    this.setState({hideMenu: false});
  }

  render() {
    return (
      <div>
        <ul className='navbar-navigation-upper'>
          <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide}>Women&apos;s</li>
          <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide} className='navbar-selected'>Men&apos;s</li>
          <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide}>Home</li>
          <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide}>Lifestyle</li>
          <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide}>Beauty</li>
          <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide} className='navbar-sale'>Sale</li>
        </ul>
        <div className='navbar-upper-dropdown-container'>
          <Menu
            name={this.state.menuName}
            show={this.state.showMenu}
            cancelHide={this.clearHideMenu}
            hide={this.delayHide}
          />
        </div>
      </div>
    );
  }
}

export default NavMain;
