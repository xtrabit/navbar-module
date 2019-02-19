/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import Navigation from '../client/navigation';

describe.only('Navigation section', () => {

  it('Navigation should exist', () => {
    const wrapper = mount(<Navigation />);
    expect(wrapper.find('.navbar-header-navigation').exists()).toBe(true);
  });

  it('If user has not signed in, it should show "Sign In"', () => {
    const wrapper = mount(<Navigation />);
    expect(wrapper.instance().state.user).toEqual('anonymous')
    expect(wrapper.find('.navbar-navigation-signin-link').exists()).toBe(true);
  });

  it('If user signed in, it should render "My Account"', () => {
    const wrapper = mount(<Navigation />);
    wrapper.setProps({user: 'someOneElse'});
    wrapper.update();
    expect(wrapper.find('.navbar-navigation-signin-link').exists()).toBe(false);
    expect(wrapper.find('.navbar-navigation-account').exists()).toBe(true);
  });

  it('Clicking on "Sign In" should change showSignIn to true', () => {
    const wrapper = mount(<Navigation ignore={() => {}}/>, );
    window.scroll = jest.fn();
    wrapper.find('.navbar-navigation-signin-link').simulate('click');
    expect(wrapper.instance().state.showSignIn).toEqual(true);
  });

});
