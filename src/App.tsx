import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import BrandHistory from './pages/BrandHistory/BrandHistory';
import Yhteystiedot from './pages/Yhteystiedot/Yhteystiedot';
import Korusarjat from './pages/Korusarjat/Korusarjat';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<BrandHistory />} />
        <Route path="/yhteystiedot" element={<Yhteystiedot />} />
        <Route path="/korusarjat" element={<Korusarjat />} />
      </Routes>
    </>
  );
}

export default App;
