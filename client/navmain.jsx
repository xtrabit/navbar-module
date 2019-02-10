import React from 'react';
import Menu from './menu';

class NavMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuName: ''
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    // console.log('event:',event.target.innerHTML)
    event.preventDefault();
    this.setState({showMenu: true});
    this.setState({menuName: event.target.innerHTML})
  }

  hideMenu(event) {
    event.preventDefault();
    this.setState({showMenu: false});
    // this.setState({menuName: ''})
  }

  render() {
    return (
      <div>
      <ul className='navbar-navigation-upper'>
        <li onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>Women's</li>
        <li onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>Men's</li>
        <li onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>Home</li>
        <li onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>Lifestyle</li>
        <li onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>Beauty</li>
        <li onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>Sale</li>
      </ul>
      <div className='navbar-upper-dropdown-container'>
        <Menu name={this.state.menuName} show={this.state.showMenu}/>
      </div>
      </div>
    );
  }
}

export default NavMain;