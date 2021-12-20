import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders the title', () => {
  render(<Header />);
  const title = screen.getByText(/Seddit/i);
  expect(title).toBeInTheDocument();
});
