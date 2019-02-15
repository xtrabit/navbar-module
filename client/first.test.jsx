
import React from 'react';
import { shallow, mount, render } from 'enzyme';

// Components
import App from './app';
import Popular from './popular';

// function setup() {
//   const props = {
//     imgPath: 'some/image/path/to/a/mock/image',
//   };
//   const wrapper = mount(<App />);
//   return { wrapper, props };
// }

describe('WelcomeMessage Test Suite', () => {

  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
          resolve({
            json: function() {
              return [
                {id: 1, image_url: 'some/URL1',item_name: 'item name 1'},
                {id: 2,image_url: 'some/URL2',item_name: 'item name 2'},
                {id: 3,image_url: 'some/URL3',item_name: 'item name 3'}
              ];
            }
          });
        });

        return p;
    });

  });


  // it("ack", async function() {
  //   const response = await fetch('somecall');
  //   console.log(response);
  //   expect(response.Id).toBe(1);
  // });





  it('Should have an image', () => {
    const wrapper = shallow(<Popular />);

    expect(wrapper.find('img').exists()).toBe(true);
    // expect(wrapper.find('.navbar-popular-item-image').exists()).toBe(true);
  });
});