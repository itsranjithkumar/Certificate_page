import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CertificatePage from './Components/CertificatePage';
import GeneratedCertificate from './Components/GeneratedCertificate'; // Assuming this is for the generated certificates
import InternshipCertificate from './Components/InternshipCertificate'; // Import your new InternshipCertificate component
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CertificatePage />} />
        <Route path="/:name-certificate" element={<GeneratedCertificate />} />
        <Route path="/internship-certificate" element={<InternshipCertificate />} /> {/* Add the route */}
      </Routes>
    </Router>
  );
}

export default App;
