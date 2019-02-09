import React from 'react';

class Popular extends React.Component {
  render() {
    return (
      <div className='navbar-search-popular'>
        <h3 className='navbar-popular-header'>POPULAR PRODUCTS</h3>
        <div className='navbar-popular-container'>
          <div className='navbar-popular-item'>
            <div className='navbar-popular-item-image-container'>
              <img className='navbar-popular-item-image'src=''></img>
            </div>
            <div className='navbar-popular-item-description'>
              <h3 className='navbar-popular-item-header'>some popular header</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popular;