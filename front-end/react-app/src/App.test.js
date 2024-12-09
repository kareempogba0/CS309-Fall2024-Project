import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import App from './App';

test('renders the home page header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to Our Shop/i);
  expect(headerElement).toBeInTheDocument();
});

