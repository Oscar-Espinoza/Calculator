import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../routes/Home';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
