import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CertificatePage from './Components/CertificatePage';
import GeneratedCertificate from './Components/GeneratedCertificate';
import DocumentGenerator from './Components/documentgenerator'; // Correctly import the file
import GeneratedLetter from './Components/GeneratedLetter'; // Import the GeneratedLetter component
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CertificatePage />} />
        <Route path="/:name-certificate" element={<GeneratedCertificate />} />
        <Route path="/document-generator" element={<DocumentGenerator />} /> {/* Add the route */}
        <Route path="/generated-letter" element={<GeneratedLetter />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
