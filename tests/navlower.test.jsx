/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import NavLower from '../client/navlower';

describe('NavLower section', () => {

  it('Navbar should exist', () => {
    const wrapper = mount(<NavLower />);
    expect(wrapper.find('.navbar-navigation-lower').exists()).toBe(true);
  });

  it('Navbar should have 13 menues', () => {
    const wrapper = mount(<NavLower />);
    expect(wrapper.find('li').length).toBe(13);
  });

  it('Pointing at menu name should set state "showMenu" to true after 400ms', () => {
    jest.useFakeTimers();
    const wrapper = mount(<NavLower />);
    wrapper.find('li').first().simulate('mouseEnter');
    jest.advanceTimersByTime(400);
    expect(wrapper.instance().state.showMenu).toEqual(true);
  });

  it('Moving away from menu name should set state "showMenu" to false after 400ms', () => {
    jest.useFakeTimers();
    const wrapper = mount(<NavLower />);
    wrapper.setState({showMenu: true})
    wrapper.find('li').first().simulate('mouseLeave');
    jest.advanceTimersByTime(400);
    expect(wrapper.instance().state.showMenu).toEqual(false);
  });

});
