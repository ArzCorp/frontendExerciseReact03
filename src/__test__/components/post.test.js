import React from 'react';
import { mount } from 'enzyme'
import Post from '../../components/Post';

describe('Hero component test', () => {
  const post = mount(<Post />);
  test('component mount', () => {
    expect(post.length).toEqual(1)
  });
});