/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import Popular from '../client/popular';

var randomItems = [
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

describe('Popular Section test', () => {
  beforeEach(function() {
    window.fetch = jest.fn().mockImplementation((url) => {
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
              return randomItems;
            }
          });
        }
      });
      return p;
    });
  });

  it('Should make a request upon mounting to get promotional items', () => {
    const wrapper = mount(<Popular />);
    expect(fetch).toHaveBeenCalled();
  });

  it('Should make a request with "http://localhost:3001/get3randomitems" URL', () => {
    const wrapper = mount(<Popular />);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/get3randomitems');
  });

  it('Should update its state.promoItems to contain server response to "/get3randomitems"', (done) => {
    const wrapper = mount(<Popular />);
    setImmediate(() => {
      expect(wrapper.instance().state.promoItems).toEqual(randomItems);
      done();
    });
  });

  it('Should change Popular section header to "PRODUCT RESULTS:" if search was performed', () => {
    const wrapper = mount(<Popular searchStr={'search'}/>);
    expect(wrapper.find('.navbar-popular-header').text()).toEqual("PRODUCT RESULTS: search");
  });

  it('Should show images in Popular section when open', (done) => {
    const wrapper = mount(<Popular />);
    expect(wrapper.find('.navbar-popular-item-image').exists()).toBe(false);
    setImmediate(() => {
      wrapper.update();
      expect(wrapper.find('.navbar-popular-item-image').exists()).toBe(true);
      done();
    });
  });

  it('Expect addToCart to be called on image click', (done) => {
    let spy = jest.fn();
    const wrapper = mount(<Popular items={null} addItemToCart={spy}/>);
    setImmediate(() => {
      wrapper.update();
      expect(wrapper.find('.navbar-popular-item-image').exists()).toBe(true);
      wrapper.find('.navbar-popular-item-image').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    })
  });

  it('Should update state when recieves "items"', (done) => {
    let spy = jest.fn();
    const wrapper = mount(<Popular items={randomItems} addItemToCart={spy}/>);
    expect(wrapper.instance().state.items).toEqual(null);
    setImmediate(() => {
      wrapper.update();
      expect(wrapper.instance().state.items).toEqual(randomItems);
      done();
    })
  });
});
