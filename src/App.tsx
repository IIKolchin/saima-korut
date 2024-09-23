import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import BrandHistory from './pages/BrandHistory/BrandHistory';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<BrandHistory />} />
      </Routes>
    </>
  );
}

export default App;
