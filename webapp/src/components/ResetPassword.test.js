import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResetPassword from './ResetPassword';
import { sel, changeInputValue } from '../helpers/testHelpers';

describe('ResetPassword Component', () => {
  it('starts with an empty form', () => {
    const wrapper = generateComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('fills in password', () => {
    const onChangePassword = jest.fn();
    const wrapper = generateComponent({ onChangePassword });
    const input = wrapper.find(sel('password'));

    changeInputValue(input, 'admin');

    expect(onChangePassword.mock.calls.length).toBe(1);
  });

  it('submits resets password form', () => {
    const onSubmit = jest.fn();
    const wrapper = generateComponent({ onSubmit });
    const form = wrapper.find(sel('form'));

    form.simulate('submit');

    expect(onSubmit.mock.calls.length).toBe(1);
  });

  it('displays error', () => {
    const error = 'Invalid username or password';
    const wrapper = generateComponent({ error });
    const errorMessage = wrapper.find(sel('error'));

    expect(errorMessage.render().text()).toContain(error);
    expect(errorMessage).toMatchSnapshot();
  });
});

function generateComponent(props = {}) {
  const propsToUse = {
    form: {
      password: '',
    },
    onChangePassword: () => {},
    onSubmit: () => {},
    ...props,
  }

  return shallow(<ResetPassword {...propsToUse} />);
}
