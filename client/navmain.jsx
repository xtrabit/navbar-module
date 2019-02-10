import React from 'react';
import Menu from './menu';

class NavMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuName: '',
      cancelHide: ''
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.cancel = 0;
  }

  showMenu(event) {
    console.log('enter show++++++++++++++++++++++++++++++++++++++++')
    event.preventDefault();
    console.log('SHOW MENU SHOULD CLEAR state',this.state.cancelHide)
    console.log('SHOW MENU SHOULD CLEAR cancel',this.cancel)
    clearTimeout(this.cancel);
    this.setState({showMenu: true});
    this.setState({menuName: event.target.innerHTML})
  }

  hideMenu(event) {
    console.log('enter hide----------------------------------------')
    event.preventDefault();
    this.cancel = setTimeout(() => {
          console.log('TRIGGERED')
          this.setState({showMenu: false});
        }, 2000);
    this.setState({cancelHide: this.cancel});
    console.log('leaving hide, cacel = ', this.cancel)
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
        <li onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu} className='navbar-sale'>Sale</li>
      </ul>
      <div className='navbar-upper-dropdown-container'>
        <Menu name={this.state.menuName} show={this.state.showMenu}
          cancel={this.state.cancelHide} hide={this.hideMenu}/>
      </div>
      </div>
    );
  }
}

export default NavMain;