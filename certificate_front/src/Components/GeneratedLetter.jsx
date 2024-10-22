import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';

const GeneratedLetter = () => {
  const location = useLocation();
  const { letterText } = location.state || {}; // Get letter text from state

  const downloadLetter = () => {
    const letterContent = document.getElementById("letter-content");
    html2canvas(letterContent).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'letter.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div id="letter-content" className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-8 border border-gray-300">
        <div className="mb-8 text-center">
          <img src="/logo.png" alt="Logo" className="mx-auto mb-4" style={{ maxWidth: '100px', height: 'auto' }} />
          <p className="text-lg font-semibold">Magizh Technologies</p>
          <p>JK Complex, Sathyamangalam - Mettupalayam Main Rd</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: letterText }} />
        
      </div>
    </div>
  );
};

export default GeneratedLetter;
