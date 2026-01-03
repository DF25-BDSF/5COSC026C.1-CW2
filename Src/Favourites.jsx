import React, { useState } from "react";

export default function Favourites({ favourites, removeFavourite, clearFavourites }) {
  const [dragOver, setDragOver] = useState(false);

  const onDragOver = (e) => { 
    e.preventDefault(); 
    setDragOver(true); 
  };

  const onDragLeave = () => {
    setDragOver(false);
  };

  const onDrop = (e) => {
    setDragOver(false);
    const id = e.dataTransfer.getData("text/plain");
  };

  return (
    <div
      className={`favourites ${dragOver ? "dragover" : ""}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <h3>Favourites</h3>
      <div className="actions">
        <button 
          className="btn warn" 
          onClick={clearFavourites}
          disabled={favourites.length === 0}
        >
          Clear list
        </button>
      </div>
      {favourites.length === 0 && (
        <p className="meta">Drag cards here or use Favourite buttons.</p>
      )}
      {favourites.map(p => (
        <div 
          key={p.id} 
          className="fav-item" 
          draggable
          onDragStart={(e) => e.dataTransfer.setData("text/plain", p.id)}
        >
          <span>{p.title}</span>
          <button 
            className="btn" 
            onClick={() => removeFavourite(p.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}