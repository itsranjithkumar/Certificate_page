import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CertificatePage from './Components/CertificatePage.jsx';
import GeneratedCertificate from './Components/GeneratedCertificate.jsx';
import DocumentGenerator from './Components/documentgenerator.jsx';
import GeneratedLetter from './Components/GeneratedLetter.jsx';
import NewExperienceCertificate from './Components/NewExperienceCertificate.jsx';
import ViewExperienceCertificate from './Components/ViewExperienceCertificate.tsx';
import OfferLetterPreview from './Components/OfferLetterPreview';
import NewOfferLetterForm from './Components/NewOfferLetterForm';
import { RelievingLetterPreview } from './Components/RelievingLetterPreview';
import { NewRelievingLetterForm } from './Components/NewRelievingLetterForm';
import './App.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/generate-certificate" element={<GeneratedCertificate />} />
        
        {/* Experience Certificate */}
        <Route path="/experience-certificate/form" element={<NewExperienceCertificate />} />
        <Route path="/view-experience-certificate" element={<ViewExperienceCertificate />} />
        
        {/* Offer Letter */}
        <Route path="/offer-letter/form" element={<NewOfferLetterForm />} />
        <Route path="/offer-letter/preview" element={<OfferLetterPreview />} />
        
        {/* Relieving Letter */}
        <Route path="/relieving-letter/form" element={<NewRelievingLetterForm />} />
        <Route path="/relieving-letter/preview" element={<RelievingLetterPreview />} />
        
        {/* Redirects for backward compatibility */}
        <Route path="/new-experience-certificate" element={<Navigate to="/experience-certificate/form" replace />} />
        <Route path="/offer-letter" element={<Navigate to="/offer-letter/form" replace />} />
        <Route path="/relieving-letter" element={<Navigate to="/relieving-letter/form" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
