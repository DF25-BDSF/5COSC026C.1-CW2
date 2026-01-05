import React, { useState } from 'react';

export default function PropertyGallery({ images = [] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <img src={images[active]} alt="Main image" />
      <div>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
