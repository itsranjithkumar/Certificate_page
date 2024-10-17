import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CertificatePage from './Components/CertificatePage';
import GeneratedCertificate from './Components/GeneratedCertificate';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CertificatePage />} />
        <Route path="/:name-certificate" element={<GeneratedCertificate />} />
      </Routes>
    </Router>
  );
}

export default App;
