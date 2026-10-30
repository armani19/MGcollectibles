import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the existing and new collector reviews', () => {
  render(<App />);
  expect(screen.getAllByText('Jah Mel')).toHaveLength(2);
  expect(screen.getAllByText('Jaycee M Gica')).toHaveLength(2);
  expect(screen.getAllByText('Dennis Tristan Malihan')).toHaveLength(2);
  expect(screen.getAllByText('Raymond Abroqueña')).toHaveLength(2);
  expect(screen.getAllByText('Jaycee Victoria Alipio')).toHaveLength(2);
});
