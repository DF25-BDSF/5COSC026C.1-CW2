import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext(null);

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (id) => {
    if (!favourites.find(f => f.id === id)) {
      setFavourites(prev => [...prev, { id }]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(prev => prev.filter(f => f.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, clearFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
}
