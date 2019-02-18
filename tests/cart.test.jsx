/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import Cart from '../client/cart';

describe('Cart section', () => {
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

  it('Cart should show if quantity is updated', () => {
    jest.useFakeTimers();
    const wrapper = mount(<Cart item={prop.item} qty={prop.qty} />);
    expect(wrapper.find('.navbar-cart-container').exists()).toBeFalsy();
    wrapper.setProps({qty: 1});
    wrapper.update();
    expect(wrapper.find('.navbar-cart-container').exists()).toBeTruthy();
  });

  it('Cart should hide after 2 seconds', () => {
    jest.useFakeTimers();
    const wrapper = mount(<Cart item={prop.item}/>);
    wrapper.setProps({qty: 1});
    wrapper.update();
    expect(wrapper.find('.navbar-cart-container').exists()).toBeTruthy();
    jest.advanceTimersByTime(2000);
    wrapper.update();
    expect(wrapper.find('.navbar-cart-container').exists()).toBeFalsy();
  });
});
