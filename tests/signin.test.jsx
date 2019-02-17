/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import SignIn from '../client/signin';

describe.only('Sign In section', () => {

  it('Sign In section should not exist if "show" from props is false', () => {
    expect(shallow(<SignIn />).find('.navbar-signin').exists()).toBeFalsy();
  });

  it('Sign In section should exist if "show" is set to "true"', () => {
    expect(shallow(<SignIn show={true} />).find('.navbar-signin').exists()).toBeTruthy();
  });

  it('Should call signIn() if "Sign In" button is clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(<SignIn show={true} signIn={spy} hide={() => {}} />);
    wrapper.find('.navbar-signin-button-signin').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('Should call "hide()" to hide "Sign In" modal if background is clicked', () => {
    const spy = jest.fn();
    const hide = jest.fn();
    const wrapper = mount(<SignIn show={true} signIn={spy} hide={hide} />);
    wrapper.find('.navbar-signin-background').simulate('click');
    expect(hide).toHaveBeenCalled();
  });
});
