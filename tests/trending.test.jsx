/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import Trending from '../client/trending';

describe('Trending section', () => {

  it('Trending section should exist', () => {
    expect(shallow(<Trending />).find('.navbar-search-trending').length).toEqual(1)
  });

  it('Should not have suggestions if no search was performed', () => {
    const wrapper = mount(<Trending />);
    expect(wrapper.find('.navbar-suggestions-list').exists()).toBe(false);
  });

  it('Should show suggestions if search was performed', (done) => {
    const wrapper = mount(<Trending searchStrFound={['a', 'b', 'c']} searchStr={'findMe'} />);

    setImmediate(() => {
      wrapper.instance().componentDidUpdate();
      wrapper.update();
      expect(wrapper.find('.navbar-suggestions-item').exists()).toBe(true);
      done();
    })
  });
});
