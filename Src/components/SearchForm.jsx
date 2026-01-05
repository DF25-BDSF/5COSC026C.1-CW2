import React, { useState } from 'react';

const defaultCriteria = {
  type: 'any',
  minPrice: '',
  maxPrice: '',
  minBeds: '',
  maxBeds: '',
  afterDate: '',
  betweenStart: '',
  betweenEnd: '',
  area: ''
};

export default function SearchForm({ criteria, setCriteria, onSearch, onReset }) {
  const [internalCriteria, setInternalCriteria] = useState(defaultCriteria);

  const currentCriteria = criteria ?? internalCriteria;
  const setCurrentCriteria = setCriteria ?? setInternalCriteria;

  const set = (key, value) => setCurrentCriteria(prev => ({ ...prev, [key]: value }));

  const handleReset = () => {
    setCurrentCriteria(defaultCriteria);
    if (typeof onReset === 'function') onReset();
  };

  return (
    <>
      <h2>Search criteria</h2>
      <div className="form-grid">
        <div className="form-item">
          <label htmlFor="type">Property type</label>
          <select 
            id="type"
            value={currentCriteria.type} 
            onChange={e => set('type', e.target.value)}
          >
            <option value="any">Any</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        <div className="form-item">
          <label htmlFor="minPrice">Min price</label>
          <input 
            id="minPrice"
            type="number" 
            value={currentCriteria.minPrice} 
            onChange={e => set('minPrice', e.target.value)}
            placeholder="Min price"
          />
        </div>

        <div className="form-item">
          <label htmlFor="maxPrice">Max price</label>
          <input 
            id="maxPrice"
            type="number" 
            value={currentCriteria.maxPrice} 
            onChange={e => set('maxPrice', e.target.value)}
            placeholder="Max price"
          />
        </div>

        <div className="form-item">
          <label htmlFor="minBeds">Min bedrooms</label>
          <input 
            id="minBeds"
            type="number" 
            value={currentCriteria.minBeds} 
            onChange={e => set('minBeds', e.target.value)}
            placeholder="e.g. 2"
          />
        </div>

        <div className="form-item">
          <label htmlFor="maxBeds">Max bedrooms</label>
          <input 
            id="maxBeds"
            type="number" 
            value={currentCriteria.maxBeds} 
            onChange={e => set('maxBeds', e.target.value)}
            placeholder="e.g. 4"
          />
        </div>

        <div className="form-item">
          <label htmlFor="area">Area (postcode prefix)</label>
          <input 
            id="area"
            type="text" 
            value={currentCriteria.area} 
            onChange={e => set('area', e.target.value)} 
            placeholder="Postcode (e.g. BR1, NW1)"
          />
        </div>

        <div className="form-item">
          <label htmlFor="afterDate">Date after</label>
          <input 
            id="afterDate"
            type="date" 
            value={currentCriteria.afterDate} 
            onChange={e => set('afterDate', e.target.value)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="betweenStart">Between start</label>
          <input 
            id="betweenStart"
            type="date" 
            value={currentCriteria.betweenStart} 
            onChange={e => set('betweenStart', e.target.value)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="betweenEnd">Between end</label>
          <input 
            id="betweenEnd"
            type="date" 
            value={currentCriteria.betweenEnd} 
            onChange={e => set('betweenEnd', e.target.value)}
          />
        </div>
      </div>

      <div className="actions">
        <button
          className="btn primary"
          type="button"
          onClick={() => { if (typeof onSearch === 'function') onSearch(); }}
        >
          Search
        </button>
        <button
          className="btn"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
