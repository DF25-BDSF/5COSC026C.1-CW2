import { render, screen } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

const mockProperty = {
  id: "prop1",
  price: 750000,
  type: "House",
  mainImage: "house.jpg"
};

test('renders property price and type correctly', () => {
  render(<PropertyCard property={mockProperty} />);
  const priceElement = screen.getByText(/£750,000/i);
  const typeElement = screen.getByText(/House/i);
  expect(priceElement).toBeInTheDocument();
  expect(typeElement).toBeInTheDocument();
});