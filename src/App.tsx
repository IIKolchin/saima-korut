import React from 'react';
import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import BrandHistory from './pages/BrandHistory/BrandHistory';
import Yhteystiedot from './pages/Yhteystiedot/Yhteystiedot';
import Korusarjat from './pages/Korusarjat/Korusarjat';
import JewelryDetailPage from './pages/JewerlyDetailPage/JewerlyDetailPage';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<BrandHistory />} />
        <Route path="/yhteystiedot" element={<Yhteystiedot />} />
        <Route path="/korusarjat" element={<Korusarjat />} />
        <Route path="/korusarjat/:id" element={<JewelryDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
