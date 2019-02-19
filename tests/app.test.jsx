/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../client/app';

describe('App section', () => {
  const prop = {
    item: {
      id: 1,
      image_url: 'some/URL',
      item_name: 'item name 1',
      price: '30.99',
      color: 'red',
      size: 'M'
    },
    qty: 3
  };

  const randomItems = [
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

  window.fetch = jest.fn().mockImplementation((url) => {
    var p = new Promise((resolve, reject) => {
      if (url === 'http://localhost:3001/addrandomtocart/anonymous') {
        resolve({
          json: function() {
            return prop;
          }
        });
      }
      if (url === 'http://localhost:3001/get3randomitems') {
        resolve({
          json: function() {
            return randomItems;
          }
        });
      }
      let temp = url.slice(0, 29);
      if (temp === 'http://localhost:3001/search/') {
        resolve({
          json: function() {
            return {
              items: randomItems,
              trending,
              found
            };
          }
        });
      }
      if (url === 'http://localhost:3001/emptycart/anonymous') {
        resolve({});
      }
      if (url === 'http://localhost:3001/signin/someuser') {
        resolve({
          json: function() {
            return 3;
          }
        });
      }
      if (url === 'http://localhost:3001/addtocart/someuser/1') {
        resolve({
          json: function() {
            return 5;
          }
        });
      }
    });
    return p;
  });

  const listener = {};
  window.removeEventListener = jest.fn().mockImplementation((event, cb) => {
    listener[event] = cb;
  });

  it('App should exist', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.navbar-header').exists()).toBe(true);
  });

  it('Lock position should transform header classname to "-fixed"', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.navbar-header').exists()).toBe(true);
    wrapper.setState({lock: true});
    expect(wrapper.find('.navbar-header').exists()).toBe(false);
    expect(wrapper.find('.navbar-header-fixed').exists()).toBe(true);
  });

  it('App should empty anonymous cart on component unmount', () => {
    const wrapper = mount(<App />);
    wrapper.instance().componentWillUnmount();
    listener.beforeunload();
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/emptycart/anonymous');
  });

  it('Sign In should retrieve user\'s items quantity in cart from database', (done) => {
    const wrapper = mount(<App />);
    wrapper.instance().signIn('someuser');
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/signin/someuser');
    setImmediate(() => {
      expect(wrapper.instance().state.qty).toEqual(3);
      done();
    });
  });

  it('AddItemToCart() shuld return qty from user\'s cart', (done) => {
    const wrapper = mount(<App />);
    wrapper.setState({user: 'someuser'});
    wrapper.instance().addItemToCart(prop.item);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/addtocart/someuser/1');
    setImmediate(() => {
      expect(wrapper.instance().state.qty).toEqual(5);
      done();
    });
  });

});
