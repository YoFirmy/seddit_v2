import { render, screen } from '@testing-library/react';

import Header from './Header';

test('renders the search bar', () => {
  render(<Header />);
  const title = screen.getByText(/Search Seddit/i);
  expect(title).toBeInTheDocument();
});
