/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import Promo from '../client/promo';

describe('Promo section', () => {

  it('Promo section should exist', () => {
    expect(shallow(<Promo />).find('.navbar-header-promo').length).toEqual(1)
  });

  it('Should call "addRandomItemToCart()" when "Shop" link is clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(<Promo addRandomItemToCart={spy}/>);
    wrapper.find('.navbar-promo-link').simulate('click')
    expect(spy).toHaveBeenCalled();
  });

});
