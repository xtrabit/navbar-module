
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Cart from './cart';
import NavSearch from './navsearch';

import App from './app';
import Popular from './popular';
import Promo from './promo';

  // beforeEach(function() {
  //   global.fetch = jest.fn().mockImplementation(() => {
  //     var p = new Promise((resolve, reject) => {
  //       resolve({
  //         json: function() {
  //           return {item: {id: 1, image_url: 'some/URL1',item_name: 'item name 1'},
  //                         qty: 3};
  //         }
  //       });
  //     });
  //     return p;
  //   });
  // });

  // beforeEach(function() {

  // });

describe('Cart Test Suite', () => {

  it('Should not render cart quantity indicator if Cart recieved "qty = 0"', () => {
    const wrapper = shallow(<Cart qty={0} />);

    expect(wrapper.find('.navbar-navigation-cart-qty').exists()).toBe(false);
  });

  it('Should render cart quantity indicator if Cart recieved "qty"', () => {
    const wrapper = shallow(<Cart qty={3} />);

    expect(wrapper.find('.navbar-navigation-cart-qty').exists()).toBe(true);
    expect(wrapper.find('.navbar-navigation-cart-qty').text()).toEqual('3')
  });
});

describe('Search behavior', () => {

  it('Should not show suggestions when search input is not in focus', () => {
    const wrapper = mount(<App />,{ attachTo: document.body });
    expect(wrapper.find('.navbar-search-suggestions').exists()).toBe(false);
  });
});

describe('Search behavior', () => {

  it('Something else', () => {

    // global.fetch = jest.fn().mockImplementation(() => {
    //   var p = new Promise((resolve, reject) => {
    //     resolve({
    //       json: function() {
    //         return {item: {id: 1, image_url: 'some/URL1',item_name: 'item name 1'},
    //                       qty: 3};
    //       }
    //     });
    //   });
    //   return p;
    // });

    global.fetch = jest.fn().mockImplementation((a) => {
      console.log("fetch called with --> ", a)
      var p = new Promise((resolve, reject) => {
        resolve({
          json: function() {
            return {item: {id: 1, image_url: 'some/URL1',item_name: 'item name 1'},
                          qty: 3};
          }
        });
      });
      return p;
    });

    const addRandomItemToCart = jest.fn((a) => {
      return console.log("arguments-------", a);
    });

    // const wrapper = shallow(<Promo addRandomItemToCart={addRandomItemToCart}/>);
    const wrapper = mount(<App />,{ attachTo: document.body });
    expect(wrapper.find('.navbar-promo-link').exists()).toBe(true);

    expect(wrapper.find('.navbar-promo-link').simulate('click'));
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/addrandomtocart/anonymous');
    expect(wrapper.find('.navbar-navigation-cart-qty').exists()).toBe(true);
  });
});
