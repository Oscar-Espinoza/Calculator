import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from './Navbar';

afterEach(cleanup);

test('Navbar component renders correctly', () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});
