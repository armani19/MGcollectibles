import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const facebookUrl = 'https://www.facebook.com/share/1HgdWfGXxo/?mibextid=wwXIfr';

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
  expect(screen.getByRole('complementary', { name: 'Official social media' }).querySelector('a')).toHaveAttribute('href', facebookUrl);
  expect(document.querySelectorAll('img.transition-toad')).toHaveLength(1);
  expect(screen.getByAltText('Miko smiling beside a stack of boxed orders')).toBeInTheDocument();
  expect(screen.getByAltText('Miko giving a thumbs up beside packed shipping boxes')).toBeInTheDocument();
  expect(screen.getByText('MESSAGE US ON FACEBOOK').closest('a')).toHaveAttribute('href', facebookUrl);
  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
});

test('hides the header on downward scroll and shows it on upward scroll', () => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0, writable: true });
  render(<App />);
  const header = document.querySelector('header');
  window.scrollY = 150;
  fireEvent.scroll(window);
  expect(header).toHaveClass('is-hidden');
  window.scrollY = 100;
  fireEvent.scroll(window);
  expect(header).not.toHaveClass('is-hidden');
  window.scrollY = 0;
});
