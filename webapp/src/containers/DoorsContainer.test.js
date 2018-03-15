import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Component } from './DoorsContainer';
import Doors from '../components/Doors';
import { sel } from '../helpers/testHelpers';

describe('Doors Container', () => {
  it('starts as loading', () => {
    const wrapper = generateComponent();
    const loader = wrapper.find(sel('loader'));

    expect(loader.render().text()).toContain('Loading...');
  });

  it('fetches doors', () => {
    const fetchDoors = jest.fn()
    const wrapper = generateComponent({ fetchDoors });

    expect(fetchDoors.mock.calls.length).toBe(1);
  });

  it('displays doors', () => {
    const list = [{id: 1}, {id: 2}];
    const wrapper = generateComponent({ isLoading: false, list });

    expect(wrapper.find(Doors).props().list).toBe(list);
  });

  it('opens a door', () => {
    const list = [{id: 1}, {id: 2}];
    const openDoor = jest.fn();
    const wrapper = generateComponent({ isLoading: false, list, openDoor });

    expect(wrapper.find(Doors).props().onOpen).toBe(openDoor);
  });
});

function generateComponent(props = {}) {
  const propsToUse = {
    list: [],
    isLoading: true,
    fetchDoors: () => {},
    openDoor: () => {},
    ...props,
  }

  return shallow(<Component {...propsToUse} />);
}
