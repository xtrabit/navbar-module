
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Cart from '../client/cart';
import NavSearch from '../client/navsearch';

import App from '../client/app';
import Popular from '../client/popular';
import Promo from '../client/promo';

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

  global.fetch = jest.fn().mockImplementation((url) => {
    var p = new Promise((resolve, reject) => {
      if (url === 'http://localhost:3001/addrandomtocart/anonymous') {
        resolve({
          json: function() {
            return {
              item: {
                id: 1,
                image_url: 'some/URL1',
                item_name: 'item name 1'
              },
              qty: 3
            };
          }
        });
      }
      if (url === 'http://localhost:3001/get3randomitems') {
        resolve({
          json: function() {
            return [
              {
                id: 1,
                image_url: 'some/URL1',
                item_name: 'item name 1'
              },
              {
                id: 2,
                image_url: 'some/URL2',
                item_name: 'item name 2'
              },
              {
                id: 3,
                image_url: 'some/URL3',
                item_name: 'item name 3'
              }
            ];
          }
        });
      }
    });
    return p;
  });

  it('Should not show suggestions when search input is not in focus', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.navbar-search-suggestions').exists()).toBe(false);
  });
});

describe('Promo bar Sale link', () => {

  it('Clicking Sale link in Promo bar should send GET request to add item to Cart', () => {

    const wrapper = mount(<App />);
    expect(wrapper.find('.navbar-promo-link').exists()).toBe(true);
    expect(wrapper.find('.navbar-promo-link').simulate('click'));

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/addrandomtocart/anonymous');
  });

  it('Should show suggestions when "showSuggestions" is set to "true"', () => {
    const wrapper = mount(<NavSearch />);
    wrapper.setState({'showSuggestions': true});
    expect(wrapper.find('.navbar-search-suggestions').exists()).toBe(true);
  });

});


describe('Popular section', () => {
  var items = [
                {
                  id: 1,
                  image_url: 'some/URL1',
                  item_name: 'item name 1'
                },
                {
                  id: 2,
                  image_url: 'some/URL2',
                  item_name: 'item name 2'
                },
                {
                  id: 3,
                  image_url: 'some/URL3',
                  item_name: 'item name 3'
                }
              ];

  it('Should show images in Popular section when "showSuggestions" is set to "true"', () => {
    const wrapper = shallow(<Popular items={items}/>);
    expect(wrapper.find('.navbar-popular-item').exists()).toBe(false);
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/get3randomitems');
    wrapper.setState({items: items});
    expect(wrapper.find('.navbar-popular-item').exists()).toBe(true);
    expect(wrapper.find('.navbar-popular-item-image').exists()).toBe(true);
  });

  it('Expect addToCart to be called on image click', () => {
    let spy = jest.fn();
    const wrapper = mount(<Popular items={items} addItemToCart={spy}/>);
    wrapper.setState({items: items});
    expect(wrapper.find('.navbar-popular-item-image').exists()).toBe(true);
    wrapper.find('.navbar-popular-item-image').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  // it('Expect change', () => {
  //   const wrapper = mount(<NavSearch />);
  //   wrapper.find('.navbar-search-input').simulate('change', { target: { value: "foo" }});
  //   expect(wrapper.find('.navbar-search-input').instance().value).toEqual('foo');
  // });
});
