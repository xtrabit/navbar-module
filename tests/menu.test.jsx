/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import Menu from '../client/menu';

describe('Menu section', () => {

  it('Main menu dropdown container should exist', () => {
    const wrapper = mount(<Menu />);
    expect(wrapper.find('.navbar-upper-dropdown').exists()).toBe(true);
  });

  it('Should not have any list items visible', () => {
    const wrapper = mount(<Menu />);
    expect(wrapper.find('.navbar-upper-dropdown-menu').length).toEqual(0);
  });

  it('Should render menu if category and show property are given', () => {
    const wrapper = mount(<Menu show={true} name={'Men\'s'} />);
    expect(wrapper.find('.navbar-upper-dropdown-menu li').length).toBeGreaterThan(3);
  });

});
