import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Layout from './Layout';
import { sel } from '../helpers/testHelpers';

describe('Layout Component', () => {
  it('displays the logged out header by default', () => {
    const wrapper = generateLayout();
    expect(wrapper.find(sel('logged-out-header')).exists()).toBeTruthy();
    expect(wrapper.find(sel('logged-in-header')).exists()).toBeFalsy();
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the logged in header', () => {
    const wrapper = generateLayout({ isLoggedIn: true });
    expect(wrapper.find(sel('logged-out-header')).exists()).toBeFalsy();
    expect(wrapper.find(sel('logged-in-header')).exists()).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});

function generateLayout(props = {}) {
  const propsToUse = {
    onLogout: () => {},
    isLoggedIn: false,
    ...props,
  }

  return shallow(<Layout {...propsToUse}><p>Content</p></Layout>);
}

