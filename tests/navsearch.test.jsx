/* eslint-disable */
import React from 'react';
import {shallow, mount} from 'enzyme';
import NavSearch from '../client/navsearch';

describe('NavSearch section', () => {
  const randomItems = [
    {
      id: 1,
      image_url: 'some/URL1',
      item_name: 'item name 1'
    },
    {
      id: 2,
      image_url: 'some/URL2',
      item_name: 'item name 2'
    },
    {
      id: 3,
      image_url: 'some/URL3',
      item_name: 'item name 3'
    }
  ];

  const trending = ['champion', 'guess', 'kappa', 'vans', 'dr martens'];
  const found = ['red', 'floor', 'my', 'dr', 'too'];

  window.fetch = jest.fn().mockImplementation((url) => {
    var p = new Promise((resolve, reject) => {
      if (url === 'http://localhost:3001/search/string') {
        resolve({
          json: function() {
            return {
              items: randomItems,
              trending,
              found
            };
          }
        });
      }
    });
    return p;
  });

  const spyContract = jest.fn();
  const spyExpand = jest.fn();

  const listener = {};
  document.addEventListener = jest.fn().mockImplementation((event, cb) => {
    listener[event] = cb;
  });
  const spyRemoveEventListener = jest.fn();
  document.removeEventListener = spyRemoveEventListener;

  it('Should show suggestions when "showSuggestions" is set to "true"', () => {
    const wrapper = mount(<NavSearch />);
    expect(wrapper.find('.navbar-search-suggestions').exists()).toBe(false);
    wrapper.setState({'showSuggestions': true});
    wrapper.update();
    expect(wrapper.find('.navbar-search-suggestions').exists()).toBe(true);
  });

  it('Should call expandSearch input on focus', () => {
    const wrapper = mount(<NavSearch />);
    wrapper.instance().expandSearch = spyExpand;
    wrapper.find('.navbar-search-input').simulate('focus');
    expect(spyExpand).toHaveBeenCalled();
  });


  it('Should call contractSearch when mouse clicks outside of Input or Suggestions', () => {
    const wrapper = shallow(<NavSearch />);
    wrapper.instance().expandSearch = spyExpand;
    wrapper.instance().contractSearch = spyContract;
    wrapper.find('.navbar-search-input').simulate('focus');
    wrapper.find('.navbar-search-form').simulate('mouseLeave');
    listener.click();
    expect(spyContract).toHaveBeenCalled();
    wrapper.instance().setState({showSuggestions: true});
    wrapper.update();
    wrapper.find('.navbar-search-form').simulate('mouseEnter');
  });

  it('Should remove eventListener on mouse enter into Suggestions', () => {
    const wrapper = shallow(<NavSearch />);
    wrapper.instance().setState({showSuggestions: true});
    wrapper.find('.navbar-search-form').simulate('mouseEnter');
    expect(spyRemoveEventListener).toHaveBeenCalled();
  });

  it('Should make ajax call on serch input change', () => {
    const wrapper = mount(<NavSearch />);
    wrapper.find('.navbar-search-input').simulate('change', {target: {value: 'string'}});
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/search/string')
  });

  it('Should not make ajax call with empty serch string', () => {
    const wrapper = mount(<NavSearch />);
    wrapper.find('.navbar-search-input').simulate('change', {target: {value: ''}});
    expect(fetch).toHaveBeenCalledTimes(0);
  });

  it('Should set showSuggestions to true when serch input is in focus', () => {
    const wrapper = mount(<NavSearch />, {attachTo: document.body});
    wrapper.find('.navbar-search-wrapper').instance().animate = jest.fn();
    wrapper.find('.navbar-search-input').simulate('focus');
    expect(wrapper.instance().state.showSuggestions).toEqual(true);
  });

  it('Should set showSuggestions to false when serch input looses focus', () => {
    const wrapper = mount(<NavSearch />, {attachTo: document.body});
    wrapper.find('.navbar-search-wrapper').instance().animate = jest.fn();
    wrapper.find('.navbar-search-input').simulate('focus');
    expect(wrapper.instance().state.showSuggestions).toEqual(true);
    wrapper.find('.navbar-search-form').simulate('mouseLeave');
    listener.click();
    expect(wrapper.instance().state.showSuggestions).toEqual(false);
  });

});