import React from 'react';

class NavLower extends React.Component {
  render() {
    return (
      <ul className='navbar-navigation-lower'>
        <li>New</li>
        <li>Brands</li>
        <li>Graphic Tees</li>
        <li>Tops</li>
        <li>Coats + Jackets</li>
        <li>Bottoms</li>
        <li>Suiting</li>
        <li>Shoes</li>
        <li>Accessories</li>
        <li>Socks + Underwear</li>
        <li>Vintage</li>
        <li>Grooming</li>
        <li className='navbar-sale'>Sale</li>
      </ul>
    );
  }
}

export default NavLower;