import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CertificatePage from './Components/CertificatePage.jsx';
import GeneratedCertificate from './Components/GeneratedCertificate.jsx';
import DocumentGenerator from './Components/documentgenerator.jsx';
import GeneratedLetter from './Components/GeneratedLetter.jsx';
import NewExperienceCertificate from './Components/NewExperienceCertificate.jsx';
import ViewExperienceCertificate from './Components/ViewExperienceCertificate.tsx';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CertificatePage />} />
        <Route path="/generate-certificate" element={<GeneratedCertificate />} />
        <Route path="/document-generator" element={<DocumentGenerator />} />
        <Route path="/generated-letter" element={<GeneratedLetter />} />
        
        {/* New Experience Certificate */}
        <Route path="/new-experience-certificate" element={<NewExperienceCertificate />} />
        <Route path="/experience-certificate/form" element={<NewExperienceCertificate />} />
        <Route path="/view-experience-certificate" element={<ViewExperienceCertificate />} />
      </Routes>
    </Router>
  );
}

export default App;
