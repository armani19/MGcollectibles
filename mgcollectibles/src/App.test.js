import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows the existing and new collector reviews', () => {
  render(<App />);
  expect(screen.getAllByText('Jah Mel')).toHaveLength(2);
  expect(screen.getAllByText('Jaycee M Gica')).toHaveLength(2);
  expect(screen.getAllByText('Dennis Tristan Malihan')).toHaveLength(2);
  expect(screen.getAllByText('Raymond Abroqueña')).toHaveLength(2);
  expect(screen.getAllByText('Jaycee Victoria Alipio')).toHaveLength(2);
});

test('shows both real moments photos and Facebook order link', () => {
  render(<App />);
  expect(screen.getByText('Our Story', { selector: '.header-links a' })).toBeInTheDocument();
  expect(screen.getByRole('complementary', { name: 'Official social media' }).querySelector('a')).toHaveAttribute('href', 'https://www.facebook.com/profile.php?id=61566342556520#');
  expect(document.querySelectorAll('img.transition-toad')).toHaveLength(2);
  expect(screen.getByAltText('Miko smiling beside a stack of boxed orders')).toBeInTheDocument();
  expect(screen.getByAltText('Miko giving a thumbs up beside packed shipping boxes')).toBeInTheDocument();
  expect(screen.getByText('MESSAGE US ON FACEBOOK').closest('a')).toHaveAttribute('href', 'https://www.facebook.com/profile.php?id=61566342556520#');
  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
});
