import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header';

describe('header component test', () => {
  const wrapper = mount(
    <BrowserRouter>
      <Header
      />
    </BrowserRouter>
  );
  test("component moutn", () => {
    expect(wrapper.length).toEqual(1);
  });
});