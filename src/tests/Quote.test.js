import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../routes/Quote';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
