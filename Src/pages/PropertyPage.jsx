import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Tabs from "../components/Tabs";
import propertiesDataRaw from '../data/properties.json?raw';
import { FavouritesContext } from '../context/FavouritesContext';

const propertiesData = JSON.parse(propertiesDataRaw);

export default function PropertyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const allProperties = propertiesData.properties;
  const property = allProperties.find(p => p.id === id);
  const { addFavourite, removeFavourite } = useContext(FavouritesContext);
  const [activeTab, setActiveTab] = useState("desc");

  if (!property) {
    return (
      <div className="property-detail-layout">
        <button className="btn back-btn" onClick={() => navigate('/')}>
          ← Back to Search
        </button>
        <p className="meta">Property not found.</p>
      </div>
    );
  }

  const tabs = [
    { 
      key: "desc", 
      label: "Description", 
      content: <p>{property.longDescription}</p> 
    },
    { 
      key: "plan", 
      label: "Floor plan", 
      content: <img src={property.floorPlan} alt="Floor plan" style={{maxWidth: '100%'}} /> 
    },
    { 
      key: "map", 
      label: "Map", 
      content: <img src={property.mapImage} alt="Map" style={{maxWidth: '100%'}} /> 
    }
  ];

  return (
    <div className="property-detail-layout">
      <button className="btn back-btn" onClick={() => navigate('/')}>
        ← Back to Search
      </button>
      <div className="property-page">
        <h2>{property.title}</h2>
        <div className="meta">
          £{property.price.toLocaleString()} • {property.type} • {property.bedrooms} beds • Added {property.dateAdded}
        </div>

        <Gallery images={property.images} title={property.title} />
        <Tabs tabs={tabs} activeKey={activeTab} onChange={setActiveTab} />

        <div className="actions">
          <button 
            className="btn secondary" 
            onClick={() => addFavourite(property.id)}
          >
            Favourite
          </button>
          <button 
            className="btn warn" 
            onClick={() => removeFavourite(property.id)}
          >
            Remove favourite
          </button>
        </div>
      </div>
    </div>
  );
}
