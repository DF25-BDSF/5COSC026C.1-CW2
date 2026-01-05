import React, { useState, useContext } from "react";
import { FavouritesContext } from '../context/FavouritesContext';
import propertiesDataRaw from '../data/properties.json?raw';

const propertiesData = JSON.parse(propertiesDataRaw);

export default function Favourites() {
  const [dragOver, setDragOver] = useState(false);
  const { favourites, removeFavourite, clearFavourites, addFavourite } = useContext(FavouritesContext);

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
    if (id) addFavourite(id);
  };

  const favouritesProps = (favourites || []).map(f => propertiesData.properties.find(p => p.id === f.id)).filter(Boolean);

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
          disabled={favouritesProps.length === 0}
        >
          Clear list
        </button>
      </div>
      {favouritesProps.length === 0 && (
        <p className="meta">Drag cards here or use Favourite buttons.</p>
      )}
      {favouritesProps.map(p => (
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
