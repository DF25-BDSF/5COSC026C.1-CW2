import { render, screen } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

test('renders all search input fields', () => {
  render(<SearchForm />);
  expect(screen.getByLabelText(/property type/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/min price/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/max price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/min bedrooms/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/postcode/i)).toBeInTheDocument();
});

