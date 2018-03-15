import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Component } from './LayoutContainer';
import Layout from '../components/Layout';
import { sel } from '../helpers/testHelpers';

describe('Layout Container', () => {
  it('renders the layout', () => {
    const wrapper = generateComponent();

    expect(wrapper.find(Layout)).toBeTruthy();
  });

  it('tells if the user is logged in', () => {
    const isLoggedIn = true;
    const wrapper = generateComponent({ isLoggedIn });

    expect(wrapper.find(Layout).props().isLoggedIn).toBe(isLoggedIn);
  });

  it('handles logout', () => {
    const onLogout = () => {};
    const wrapper = generateComponent({ onLogout });

    expect(wrapper.find(Layout).props().onLogout).toBe(onLogout);
  });
});

function generateComponent(props = {}) {
  const propsToUse = {
    isLoggedIn: true,
    onLogout: () => {},
    ...props,
  }

  return shallow(<Component {...propsToUse}><p>Content</p></Component>);
}
