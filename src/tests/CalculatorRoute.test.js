import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CalculatorRoute from '../routes/CalculatorRoute';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <BrowserRouter>
      <CalculatorRoute />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
