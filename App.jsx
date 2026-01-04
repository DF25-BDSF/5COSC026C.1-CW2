import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './Src/SearchPage';
import PropertyPage from './Src/PropertyPage';
import './App.css';

export default function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>Estate Agent Property Search</h1>
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/property/:id" element={<PropertyPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}