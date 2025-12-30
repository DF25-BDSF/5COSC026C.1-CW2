import React from 'react';

export default function SearchForm({ criteria, setCriteria }) {
  const set = (key, value) => setCriteria(prev => ({ ...prev, [key]: value }));

  return (
    <>
      <h2>Search criteria (සෙවුම් නියම)</h2>
      <div className="form-grid">
        <div className="form-item">
          <label>Type (වර්ගය)</label>
          <select value={criteria.type} onChange={e => set('type', e.target.value)}>
            <option value="any">Any</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        <div className="form-item">
          <label>Min price (අවම මිල)</label>
          <input type="number" value={criteria.minPrice} onChange={e => set('minPrice', e.target.value)} />
        </div>

        <div className="form-item">
          <label>Max price (උපරිම මිල)</label>
          <input type="number" value={criteria.maxPrice} onChange={e => set('maxPrice', e.target.value)} />
        </div>

        <div className="form-item">
          <label>Min bedrooms (අවම කාමර)</label>
          <input type="number" value={criteria.minBeds} onChange={e => set('minBeds', e.target.value)} />
        </div>

        <div className="form-item">
          <label>Max bedrooms (උපරිම කාමර)</label>
          <input type="number" value={criteria.maxBeds} onChange={e => set('maxBeds', e.target.value)} />
        </div>

        <div className="form-item">
          <label>Area (postcode prefix) (ප්‍රදේශය)</label>
          <input type="text" value={criteria.area} onChange={e => set('area', e.target.value)} placeholder="e.g. NW1" />
        </div>

        <div className="form-item">
          <label>Date after (දිනයෙන් පසු)</label>
          <input type="date" value={criteria.afterDate} onChange={e => set('afterDate', e.target.value)} />
        </div>

        <div className="form-item">
          <label>Between start (අරඹුම)</label>
          <input type="date" value={criteria.betweenStart} onChange={e => set('betweenStart', e.target.value)} />
        </div>

        <div className="form-item">
          <label>Between end (අවසානය)</label>
          <input type="date" value={criteria.betweenEnd} onChange={e => set('betweenEnd', e.target.value)} />
        </div>
      </div>

      <div className="actions">
        <button className="btn primary" type="button" onClick={() => setCriteria({ ...criteria })}>
          Search (සොයන්න)
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => setCriteria({
            type: 'any',
            minPrice: '',
            maxPrice: '',
            minBeds: '',
            maxBeds: '',
            afterDate: '',
            betweenStart: '',
            betweenEnd: '',
            area: ''
          })}
        >
          Reset (යළි සකස්)
        </button>
      </div>
    </>
  );
}
