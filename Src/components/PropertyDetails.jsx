import React, { useState } from 'react';

export default function PropertyDetails() {
  const [tab, setTab] = useState('description');

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setTab('description')}>Description</button>
        <button onClick={() => setTab('floor')}>Floor Plan</button>
        <button onClick={() => setTab('map')}>Map</button>
      </div>

      <div className="tab-content">
        {tab === 'description' && <p>Details here</p>}
        {tab === 'floor' && <img src="floor.png" alt="Property floor plan" />}
        {tab === 'map' && <img src="map.png" alt="Property map" />}
      </div>
    </div>
  );
}
