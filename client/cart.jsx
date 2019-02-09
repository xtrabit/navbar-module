import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div className='navbar-navigation-cart'>

          <a href="#">
            <span className='cart'>
              <svg className='svg' xmlns="http://www.w3.org/2000/svg" height='16.5' width='18' viewBox='0 0 16.5 18'>
              <title>
        Bag
      </title>
                <path id="bag" d="M1 15.34V7.49H15.5v7.85L13.86 17H2.64ZM6.22 2.08 7.3 1H9.14l1.09 1.09V6.5h-4ZM6.89 0 5.22 1.67V6.5H0v9.26L2.23 18h12l2.23-2.24V6.5H11.23V1.68L9.56 0Z"></path>
              </svg>
            </span>
            <span>
            <div className='cart-qty'>
                2
            </div>
            </span>
          </a>


      </div>
    );
  }
}

export default Cart;