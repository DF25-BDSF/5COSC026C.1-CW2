import React, { useState } from "react";
import Gallery from "./Gallery";
import Tabs from "./Tabs";

export default function PropertyPage({ property, addFavourite, removeFavourite }) {
  const [activeTab, setActiveTab] = useState("desc");

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
  );
}