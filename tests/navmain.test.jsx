/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import NavMain from '../client/navmain';

describe('NavMain section', () => {

  it('Main menu bar should exist', () => {
    const wrapper = mount(<NavMain />);
    expect(wrapper.find('.navbar-navigation-upper').exists()).toBe(true);
  });

  it('Main menu bar should have six items', () => {
    const wrapper = mount(<NavMain />);
    expect(wrapper.find('.navbar-navigation-upper li').length).toBe(6);
  });

  it('Show Dropdown menu should be set to false on mount', () => {
    const wrapper = mount(<NavMain />);
    expect(wrapper.instance().state.showMenu).toEqual(false);
  });

  it('Hovering over menu item should not show dropdown', () => {
    const wrapper = mount(<NavMain />);
    wrapper.find('.navbar-navigation-upper li').first().simulate('mouseEnter');
    expect(wrapper.instance().state.showMenu).toEqual(false);
  });

  it('Hovering over menu item should show dropdown in 400ms', () => {
    jest.useFakeTimers();
    const wrapper = mount(<NavMain />);
    wrapper.find('.navbar-navigation-upper li').first().simulate('mouseEnter');
    jest.advanceTimersByTime(400);
    expect(wrapper.instance().state.showMenu).toEqual(true);
  });

  it('Leaving menu item should not hide dropdown', () => {
    const wrapper = mount(<NavMain />);
    wrapper.instance().setState({showMenu: true});
    wrapper.find('.navbar-navigation-upper li').first().simulate('mouseLeave');
    expect(wrapper.instance().state.showMenu).toEqual(true);
  });

  it('Leaving menu item should hide dropdown in 400ms', () => {
    jest.useFakeTimers();
    const wrapper = mount(<NavMain />);
    wrapper.instance().setState({showMenu: true});
    wrapper.find('.navbar-navigation-upper li').first().simulate('mouseLeave');
    jest.advanceTimersByTime(400);
    expect(wrapper.instance().state.showMenu).toEqual(false);
  });

});
