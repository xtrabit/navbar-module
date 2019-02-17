import React from 'react';

class Promo extends React.Component {
  render() {
    return (
      <div id='promo' className='navbar-header-promo'>
        <span className='navbar-promo-pretitle'>
          Limited Time Only · In Stores & Online
        </span>
        <p className='navbar-promo-title'>
          UP TO 40% OFF OUT FROM UNDER INTIMATES & LOUNGE
        </p>
        <div className='navbar-promo-link-container'>
          <a className='navbar-promo-link' href='#' onClick={this.props.addRandomItemToCart}>
            Shop
          </a>

        </div>
      </div>
    );
  }
}

export default Promo;
