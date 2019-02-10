import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  showList() {
    if (this.props.show) {
      return (
        <ul className='navbar-upper-dropdown-menu'>
          <li>first</li>
          <li>second</li>
          <li>thisrd</li>
        </ul>
      );
    }

  }

  render() {
    return (
      <div className='navbar-upper-dropdown'>{console.log(this.props.show, this.props.name)}
        {this.showList()}
      </div>
    );
  }
}

export default Menu;