import React, { useState } from "react";

export default function Gallery({ images, title }) {
  const [active, setActive] = useState(0);
  const main = images[active] || images[0];

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(index);
    }
  };

  return (
    <div className="gallery">
      <img 
        className="gallery-main" 
        src={main} 
        alt={`${title} main view`} 
      />
      <div className="gallery-thumbs">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${title} thumbnail ${i + 1}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            tabIndex={0}
            className={active === i ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}
