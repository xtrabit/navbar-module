import React from 'react';

class Popular extends React.Component {
  render() {
    return (
      <div className='navbar-search-popular'>
        <h3 className='navbar-popular-header'>POPULAR PRODUCTS</h3>
        <div className='navbar-popular-container'>
          <div className='navbar-popular-item'>
            <div className='navbar-popular-item-image-container'>
              <img className='navbar-popular-item-image'src='https://s3.amazonaws.com/navbarpictures/tshirts/46893517_023_b.jpeg'></img>
            </div>
            <div className='navbar-popular-item-description'>
              <h3 className='navbar-popular-item-header'>Out From Under Jojo Oversized Thermal Button-Front Top</h3>
            </div>
          </div>
          <div className='navbar-popular-item'>
            <div className='navbar-popular-item-image-container'>
              <img className='navbar-popular-item-image'src='https://s3.amazonaws.com/navbarpictures/tshirts/48669329_040_b.jpeg'></img>
            </div>
            <div className='navbar-popular-item-description'>
              <h3 className='navbar-popular-item-header'>Out From Under Markie Seamless Cropped Cami</h3>
            </div>
          </div>
          <div className='navbar-popular-item'>
            <div className='navbar-popular-item-image-container'>
              <img className='navbar-popular-item-image'src='https://s3.amazonaws.com/navbarpictures/tshirts/50683028_030_b.jpeg'></img>
            </div>
            <div className='navbar-popular-item-description'>
              <h3 className='navbar-popular-item-header'>Out From Under Laser-Cut Hipster</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popular;