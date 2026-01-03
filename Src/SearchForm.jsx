import React from 'react';

export default function SearchForm({ criteria, setCriteria }) {
  const set = (key, value) => setCriteria(prev => ({ ...prev, [key]: value }));

  const handleReset = () => {
    setCriteria({
      type: 'any',
      minPrice: '',
      maxPrice: '',
      minBeds: '',
      maxBeds: '',
      afterDate: '',
      betweenStart: '',
      betweenEnd: '',
      area: ''
    });
  };

  return (
    <>
      <h2>Search criteria</h2>
      <div className="form-grid">
        <div className="form-item">
          <label htmlFor="type">Type</label>
          <select 
            id="type"
            value={criteria.type} 
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
            value={criteria.minPrice} 
            onChange={e => set('minPrice', e.target.value)}
            placeholder="e.g. 200000"
          />
        </div>

        <div className="form-item">
          <label htmlFor="maxPrice">Max price</label>
          <input 
            id="maxPrice"
            type="number" 
            value={criteria.maxPrice} 
            onChange={e => set('maxPrice', e.target.value)}
            placeholder="e.g. 500000"
          />
        </div>

        <div className="form-item">
          <label htmlFor="minBeds">Min bedrooms</label>
          <input 
            id="minBeds"
            type="number" 
            value={criteria.minBeds} 
            onChange={e => set('minBeds', e.target.value)}
            placeholder="e.g. 2"
          />
        </div>

        <div className="form-item">
          <label htmlFor="maxBeds">Max bedrooms</label>
          <input 
            id="maxBeds"
            type="number" 
            value={criteria.maxBeds} 
            onChange={e => set('maxBeds', e.target.value)}
            placeholder="e.g. 4"
          />
        </div>

        <div className="form-item">
          <label htmlFor="area">Area (postcode prefix)</label>
          <input 
            id="area"
            type="text" 
            value={criteria.area} 
            onChange={e => set('area', e.target.value)} 
            placeholder="e.g. BR1, NW1"
          />
        </div>

        <div className="form-item">
          <label htmlFor="afterDate">Date after</label>
          <input 
            id="afterDate"
            type="date" 
            value={criteria.afterDate} 
            onChange={e => set('afterDate', e.target.value)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="betweenStart">Between start</label>
          <input 
            id="betweenStart"
            type="date" 
            value={criteria.betweenStart} 
            onChange={e => set('betweenStart', e.target.value)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="betweenEnd">Between end</label>
          <input 
            id="betweenEnd"
            type="date" 
            value={criteria.betweenEnd} 
            onChange={e => set('betweenEnd', e.target.value)}
          />
        </div>
      </div>

      <div className="actions">
        <button 
          className="btn primary" 
          type="button" 
          onClick={() => setCriteria({...criteria})}
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