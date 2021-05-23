import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn Fib Calculator', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Fib Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
