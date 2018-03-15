import React from 'react';
import { shallow } from 'enzyme';
import { sel } from '../helpers/testHelpers';
import { Component } from './ResetPasswordContainer';
import ResetPassword from '../components/ResetPassword';
import { Redirect } from 'react-router-dom';

describe('ResetPasswordContainer Container', () => {
  it('updates typed password', () => {
    const wrapper = generateComponent();
    wrapper.instance().handleChangePassword({ target: { value: 'admin' } })
    expect(wrapper.state().form.password).toBe('admin');
  });
});

function generateComponent(props = {}) {
  const propsToUse = {
    ...props,
  }

  return shallow(<Component {...propsToUse} />);
}
