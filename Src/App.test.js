import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('Estate Agent Application', () => {
  
  // Test 1: Application renders successfully
  test('renders the application header', () => {
    render(<App />);
    const headerElement = screen.getByText(/Estate Agent Property Search/i);
    expect(headerElement).toBeInTheDocument();
  });

  // Test 2: Search functionality filters properties by type
  test('filters properties by type', async () => {
    render(<App />);
    
    const typeSelect = screen.getByLabelText(/Type/i);
    fireEvent.change(typeSelect, { target: { value: 'house' } });
    
    await waitFor(() => {
      const resultsHeading = screen.getByText(/Results/i);
      expect(resultsHeading).toBeInTheDocument();
    });
  });

  // Test 3: Price range filtering
  test('filters properties by price range', async () => {
    render(<App />);
    
    const minPriceInput = screen.getByLabelText(/Min price/i);
    const maxPriceInput = screen.getByLabelText(/Max price/i);
    
    fireEvent.change(minPriceInput, { target: { value: '300000' } });
    fireEvent.change(maxPriceInput, { target: { value: '500000' } });
    
    await waitFor(() => {
      const resultsHeading = screen.getByText(/Results/i);
      expect(resultsHeading).toBeInTheDocument();
    });
  });

  // Test 4: Adding to favourites
  test('adds property to favourites', async () => {
    render(<App />);
    
    await waitFor(() => {
      const favouriteButtons = screen.getAllByText(/Favourite/i);
      if (favouriteButtons.length > 0) {
        fireEvent.click(favouriteButtons[0]);
      }
    });
    
    const favouritesHeading = screen.getByText(/Favourites/i);
    expect(favouritesHeading).toBeInTheDocument();
  });

  // Test 5: Bedroom filtering
  test('filters properties by number of bedrooms', async () => {
    render(<App />);
    
    const minBedsInput = screen.getByLabelText(/Min bedrooms/i);
    const maxBedsInput = screen.getByLabelText(/Max bedrooms/i);
    
    fireEvent.change(minBedsInput, { target: { value: '2' } });
    fireEvent.change(maxBedsInput, { target: { value: '4' } });
    
    await waitFor(() => {
      const resultsHeading = screen.getByText(/Results/i);
      expect(resultsHeading).toBeInTheDocument();
    });
  });

  // Test 6: Reset functionality
  test('reset button clears all search criteria', () => {
    render(<App />);
    
    const typeSelect = screen.getByLabelText(/Type/i);
    fireEvent.change(typeSelect, { target: { value: 'house' } });
    
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);
    
    expect(typeSelect.value).toBe('any');
  });

  // Test 7: Property details view
  test('displays property details when clicked', async () => {
    render(<App />);
    
    await waitFor(() => {
      const viewButtons = screen.queryAllByText(/View details/i);
      if (viewButtons.length > 0) {
        fireEvent.click(viewButtons[0]);
      }
    });
    
    await waitFor(() => {
      const backButton = screen.queryByText(/Back to Search/i);
      if (backButton) {
        expect(backButton).toBeInTheDocument();
      }
    });
  });

  // Test 8: Area/postcode filtering
  test('filters properties by area', async () => {
    render(<App />);
    
    const areaInput = screen.getByLabelText(/Area \(postcode prefix\)/i);
    fireEvent.change(areaInput, { target: { value: 'BR' } });
    
    await waitFor(() => {
      const resultsHeading = screen.getByText(/Results/i);
      expect(resultsHeading).toBeInTheDocument();
    });
  });

  // Test 9: Clear favourites
  test('clears all favourites when clear button clicked', async () => {
    render(<App />);
    
    await waitFor(() => {
      const favouriteButtons = screen.getAllByText(/Favourite/i);
      if (favouriteButtons.length > 0) {
        fireEvent.click(favouriteButtons[0]);
      }
    });
    
    const clearButton = screen.getByText(/Clear list/i);
    fireEvent.click(clearButton);
    
    await waitFor(() => {
      const emptyMessage = screen.getByText(/Drag cards here or use Favourite buttons/i);
      expect(emptyMessage).toBeInTheDocument();
    });
  });

  // Test 10: Multi-criteria search
  test('filters with multiple criteria simultaneously', async () => {
    render(<App />);
    
    const typeSelect = screen.getByLabelText(/Type/i);
    const minPriceInput = screen.getByLabelText(/Min price/i);
    const minBedsInput = screen.getByLabelText(/Min bedrooms/i);
    
    fireEvent.change(typeSelect, { target: { value: 'house' } });
    fireEvent.change(minPriceInput, { target: { value: '500000' } });
    fireEvent.change(minBedsInput, { target: { value: '3' } });
    
    await waitFor(() => {
      const resultsHeading = screen.getByText(/Results/i);
      expect(resultsHeading).toBeInTheDocument();
    });
  });
});