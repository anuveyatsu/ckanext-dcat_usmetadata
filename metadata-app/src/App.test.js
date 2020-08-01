import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

console.log('------------ Run APP Tests ------------');
test('renders learn stubbed MetadataForm', () => {
  const { getByText } = render(<App />);
  const apiUrl = getByText(/apiUrl/i);
  const apiKey = getByText(/apiKey/i);
  const ownerOrg = getByText(/apiUrl/i);
  expect(apiUrl).toBeInTheDocument();
  expect(apiKey).toBeInTheDocument();
  expect(ownerOrg).toBeInTheDocument();
});
