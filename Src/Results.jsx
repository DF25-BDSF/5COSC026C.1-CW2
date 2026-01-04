import React from "react";
import PropertyCard from "./PropertyCard";


export default function Results({ results, addFavourite, onCardClick }) {
  return (
    <>
      <h2>Results</h2>
      {results.length === 0 && (
        <p className="meta">No properties match your criteria.</p>
      )}
      <div className="results-grid">
        {results.map(p => (
          <PropertyCard
            key={p.id}
            property={p}
            onFavourite={() => addFavourite(p.id)}
            onClick={() => onCardClick(p.id)}
          />
        ))}
      </div>
    </>
  );
}