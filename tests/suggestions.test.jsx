/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';

import Suggestions from '../client/suggestions';

describe('Suggestions section', () => {

  it('Suggestions section should not exist if "show" from props is false', () => {
    expect(shallow(<Suggestions />).find('.navbar-search-suggestions').exists()).toBeFalsy();
  });

  it('Suggestions section should exist if "show" is set to "true"', () => {
    expect(shallow(<Suggestions show={true} />).find('.navbar-search-suggestions').exists()).toBeTruthy();
  });
});
