import React from 'react';
import Dropdown from './dropdown';

class NavLower extends React.Component {
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
      this.setState({menuName: event.target.innerHTML})
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

  createMenuList() {
    let list = ['New', 'Brands', 'Graphic Tees', 'Tops', 'Coats + Jackets', 'Bottoms',
      'Suiting', 'Shoes', 'Accessories', 'Socks + Underwear', 'Vintage', 'Grooming', 'Sale'];
    let menus = list.map((item) => {
      return (
        <div key={item}>
          {item === 'Tops'
          ? <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide} className='navbar-selected'>{item}</li>
          : item === 'Sale'
          ? <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide} className='navbar-sale'>{item}</li>
          : <li onMouseEnter={this.delayShow} onMouseLeave={this.delayHide}>{item}</li>}
          <div className='navbar-lower-dropdown-container'>
            {this.createDropdown(item)}
          </div>
        </div>
      );
    });
    return menus;
  }

  createDropdown(name) {
    if (name === this.state.menuName){
      return (
        <Dropdown name={this.state.menuName} show={this.state.showMenu}
          cancelHide={this.clearHideMenu} hide={this.delayHide}/>
      );
    }
  }

  render() {
    return (
      <ul className='navbar-navigation-lower'>
        {this.createMenuList()}
      </ul>
    );
  }
}

export default NavLower;