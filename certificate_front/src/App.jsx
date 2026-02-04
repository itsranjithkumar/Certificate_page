import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CertificatePage from './Components/CertificatePage.jsx';
import GeneratedCertificate from './Components/GeneratedCertificate.jsx';
import DocumentGenerator from './Components/documentgenerator.jsx';
import GeneratedLetter from './Components/GeneratedLetter.jsx';
import NewExperienceCertificate from './Components/NewExperienceCertificate.jsx';
import ViewExperienceCertificate from './Components/ViewExperienceCertificate.tsx';
import OfferLetterPreview from './Components/OfferLetterPreview';
import NewOfferLetterForm from './Components/NewOfferLetterForm';
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
        
        {/* Offer Letter Routes */}
        <Route path="/offer-letter" element={<Navigate to="/offer-letter/form" replace />} />
        <Route path="/offer-letter/form" element={<NewOfferLetterForm />} />
        <Route 
          path="/preview" 
          element={
            <OfferLetterPreview />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
