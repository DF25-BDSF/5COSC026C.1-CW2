import React from "react";

export default function PropertyCard({ property = {}, onFavourite, onClick }) {
  const onDragStart = (e) => {
    if (property && property.id) e.dataTransfer.setData("text/plain", property.id);
  };

  const imgSrc = (property.images && property.images[0]) || property.mainImage || '';
  const priceText = property.price ? `£${property.price.toLocaleString()}` : '';

  return (
    <div
      className="card property-card"
      draggable
      onDragStart={onDragStart}
    >
      <img 
        src={imgSrc} 
        alt={`${property.title || 'property'} cover`} 
      />
      <div className="property-info">
        <div className="price">
          {priceText}
        </div>
        <div>{property.title}</div>
        <div className="meta">
          {property.type} {property.bedrooms ? `• ${property.bedrooms} beds` : ''} {property.area ? `• ${property.area}` : ''}
        </div>
        <div className="actions">
          <button 
            className="btn secondary" 
            onClick={onFavourite}
          >
            Favourite
          </button>
          <button 
            className="btn" 
            onClick={onClick}
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}
