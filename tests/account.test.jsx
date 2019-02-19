/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import Account from '../client/account';

describe('Account section', () => {

  it('Account dropdown menu should not exist if "show" is false', () => {
    expect(shallow(<Account />).find('.navbar-account-dropdown-container').exists()).toBeFalsy();
  });

  it('Account dropdown menu should show if "show" is true', () => {
    const wrapper = shallow(<Account />);
    wrapper.setState({show: true});
    expect(wrapper.find('.navbar-account-dropdown-container').exists()).toBeTruthy();
  });

  it('Account dropdown menu should show if mouse is over its label', () => {
    const wrapper = mount(<Account />);
    wrapper.find('.navbar-navigation-account').simulate('mouseOver');
    expect(wrapper.find('.navbar-account-dropdown-container').exists()).toBeTruthy();
  });

  it('Account dropdown menu should hide if mouse leaves the label', () => {
    const wrapper = mount(<Account />);
    wrapper.find('.navbar-navigation-account').simulate('mouseOver');
    expect(wrapper.find('.navbar-account-dropdown-container').exists()).toBeTruthy();
    wrapper.find('.navbar-navigation-account-selected').simulate('mouseLeave');
    expect(wrapper.find('.navbar-account-dropdown-container').exists()).toBeFalsy();
  });
});
