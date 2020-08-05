import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Articles from '../../components/Articles';

describe('articles component test', () => {
  const articles = mount(
    <BrowserRouter>
      <Articles />
    </BrowserRouter>
  );
  test('Component Mount', () => {
    expect(articles.length).toEqual(1)
  });
});