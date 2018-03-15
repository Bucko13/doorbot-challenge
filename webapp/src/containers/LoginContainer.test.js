import React from 'react';
import { shallow } from 'enzyme';
import { sel } from '../helpers/testHelpers';
import { Component } from './LoginContainer';
import Login from '../components/Login';
import { Redirect } from 'react-router-dom';

describe('LoginContainer Container', () => {
  it('redirects to doors page if already logged in', () => {
    const wrapper = generateComponent({ user: { username: 'admin' } });
    const loginForm = wrapper.find(Login);
    const redirect = wrapper.find(Redirect);

    expect(loginForm.exists()).toBeFalsy();
    expect(redirect.exists()).toBeTruthy();
  });

  it('displays login form if not logged in', () => {
    const wrapper = generateComponent();
    const loginForm = wrapper.find(Login);
    const redirect = wrapper.find(Redirect);

    expect(loginForm.exists()).toBeTruthy();
    expect(redirect.exists()).toBeFalsy();
  });

  it('updates typed username', () => {
    const wrapper = generateComponent();
    wrapper.instance().handleChangeUser({ target: { value: 'admin' } })
    expect(wrapper.state().form.username).toBe('admin');
  });

  it('updates typed password', () => {
    const wrapper = generateComponent();
    wrapper.instance().handleChangePassword({ target: { value: 'admin' } })
    expect(wrapper.state().form.password).toBe('admin');
  });

  it('logs in on submit', () => {
    const login = jest.fn();
    const wrapper = generateComponent({ login });
    wrapper.instance().handleSubmit();

    expect(login.mock.calls.length).toBe(1);
  });
});

function generateComponent(props = {}) {
  const propsToUse = {
    user: {
      error: '',
    },
    login: () => {},
    ...props,
  }

  return shallow(<Component {...propsToUse} />);
}
