import { render, screen, fireEvent } from '@testing-library/react';
import PropertyDetails from '../components/PropertyDetails';

test('switches to Floor Plan tab when clicked', () => {
  render(<PropertyDetails />);
  const floorPlanTab = screen.getByText(/floor plan/i);
  fireEvent.click(floorPlanTab);
  
  expect(screen.getByAltText(/property floor plan/i)).toBeInTheDocument();
});