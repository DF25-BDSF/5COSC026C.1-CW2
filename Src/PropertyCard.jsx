import React from "react";

export default function PropertyCard({ property, onFavourite, onClick }) {
  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", property.id);
  };

  return (
    <div
      className="card property-card"
      draggable
      onDragStart={onDragStart}
    >
      <img 
        src={property.images[0]} 
        alt={`${property.title} cover`} 
      />
      <div className="property-info">
        <div className="price">
          £{property.price.toLocaleString()}
        </div>
        <div>{property.title}</div>
        <div className="meta">
          {property.type} • {property.bedrooms} beds • {property.area}
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