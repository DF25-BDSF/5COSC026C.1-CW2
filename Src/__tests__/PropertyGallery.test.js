import { render, screen, fireEvent } from '@testing-library/react';
import PropertyGallery from '../components/PropertyGallery';

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

test('changes main image when thumbnail is clicked', () => {
  render(<PropertyGallery images={images} />);
  const thumbnails = screen.getAllByRole('img', { name: /thumbnail/i });
  const mainImage = screen.getByRole('img', { name: /main/i });

  fireEvent.click(thumbnails[1]);
  expect(mainImage.src).toContain("img2.jpg");
});