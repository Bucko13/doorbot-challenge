import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Doors from './Doors';

describe('Doors Component', () => {
  it('starts with no doors to display', () => {
    const wrapper = generateDoor();
    const doors = wrapper.find(sel('doors'));
    const message = wrapper.find(sel('message'));

    expect(doors.children().length).toBe(0);
    expect(message.text()).toBe('There are no doors available for you right now.');
  });

  it('displays N doors', () => {
    const wrapper = generateDoor({ list: [{ id: 1 }, { id: 2 }, { id: 3 }] });
    const doors = wrapper.find(sel('doors')); const message = wrapper.find(sel('message'));
    const door = wrapper.find(sel('door-1'));

    expect(doors.children().length).toBe(3);
    expect(toJson(door)).toMatchSnapshot();
    expect(message.text()).toBe('You have access to these 3 doors:');
  });

  describe('when loaded with doors', () => {
    let wrapper;
    const onOpen = jest.fn()

    beforeEach(() => {
      wrapper = generateDoor({
        list: [{ id: 1 }, { id: 2, opened: true }, { id: 3 }],
        onOpen,
      });
    });

    it('opens a door', () => {
      const door = wrapper.find(sel('door-1-button'));
      door.simulate('click');
      expect(onOpen.mock.calls.length).toBe(1);
    });

    it('shows the door is opened', () => {
      const doorOpened = wrapper.find(sel('door-2-opened'));
      expect(doorOpened.render().text()).toBe('Opened!');
      expect(toJson(doorOpened)).toMatchSnapshot();
    });

  });

})

function generateDoor(props = {}) {
  const propsToUse = {
    list: [],
    onOpen: () => {},
    ...props,
  }

  return shallow(<Doors {...propsToUse} />);
}

function sel(id) {
  return `[data-test="${id}"]`;
}
