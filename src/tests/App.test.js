import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders header', () => {
  render(<App />);
  const header = screen.getByText("Seddit");
  expect(header).toBeInTheDocument();
});
