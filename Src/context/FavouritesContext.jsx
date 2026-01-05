import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext(null);

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (id) => {
    setFavourites(prev => {
      if (prev.find(f => f.id === id)) {
        return prev;
      }
      return [...prev, { id }];
    });
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
