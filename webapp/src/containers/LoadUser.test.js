import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Component } from './LoadUser';
import { sel } from '../helpers/testHelpers';
import { Loader } from 'semantic-ui-react';

describe('LoadUser Container', () => {
  it('starts loading', () => {
    const wrapper = generateComponent();
    const semanticUiLoader = wrapper.find(Loader);
    const content = wrapper.find(sel('content'));

    expect(semanticUiLoader.props().active).toBeTruthy();
    expect(content.exists()).toBeFalsy();
  });

  it('fetches current user', () => {
    const getCurrentUser = jest.fn();
    const wrapper = generateComponent({ getCurrentUser });

    expect(getCurrentUser.mock.calls.length).toBe(1);
  });

  it('displays content when loading is finished', () => {
    const wrapper = generateComponent({ isLoading: false });
    const semanticUiLoader = wrapper.find(Loader);
    const content = wrapper.find(sel('content'));

    expect(semanticUiLoader.exists()).toBeFalsy();
    expect(content.exists()).toBeTruthy();
  });
});

function generateComponent(props = {}) {
  const propsToUse = {
    isLoading: true,
    getCurrentUser: () => {},
    ...props,
  }

  return shallow(<Component {...propsToUse}><p data-test='content'>Content</p></Component>);
}
