import React, { useState, useContext } from "react";
import { FavouritesContext } from './FavouritesContext';
import propertiesDataRaw from './data/properties.json?raw';

const propertiesData = JSON.parse(propertiesDataRaw);

export { default } from './components/Favourites';
