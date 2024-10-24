import React from 'react';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const GeneratedLetter = () => {
  const location = useLocation();
  const { letterText } = location.state || {};

  const downloadLetter = () => {
    const letterContent = document.getElementById("letter-content");

    // Temporarily remove shadow before downloading PDF
    letterContent.classList.remove('shadow-lg');

    // Set options for html2pdf
    const opt = {
      margin: 0, // Remove margin to maximize space for content
      filename: 'internship_letter.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1.5, useCORS: true }, // Slightly lower scale for better fit
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css'] }, // Avoid page breaks within elements
    };

    // Generate and download PDF
    html2pdf()
      .from(letterContent)
      .set(opt)
      .save()
      .then(() => {
        // Re-add shadow after the PDF download is done
        letterContent.classList.add('shadow-lg');
      });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Letter Content with an awesome border */}
      <div
        id="letter-content"
        className="relative bg-gray-50 p-6 max-w-3xl mx-auto my-4 rounded-xl shadow-lg"
        style={{
          fontSize: '0.9rem',
          border: '10px solid',
          borderImage: 'linear-gradient(135deg, #ffcc00, #ff99cc, #66ccff, #ff6600) 1',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Optional shadow for added depth
        }}
      >
        {/* Logo and Header */}
        <div className="text-center mb-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto mb-2 rounded-full"
            style={{ width: '100px', height: '110px' }}
          />
          <h1 
            className="text-2xl font-bold text-gray-800" 
            style={{ fontFamily: "'Engravers Old English', serif" }} 
          >
            Magizh Technologies
          </h1>

          {/* Black Horizontal Line */}
          <div className="border-t-2 border-black my-2 w-full"></div>
        </div>

        {/* Date Right-Aligned */}
        <div className="text-right mb-4 text-lg text-gray-600">
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        {/* Letter Heading */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700" style={{ fontFamily: 'Cursive, sans-serif' }}>
            Internship Completion Letter
          </h2>
        </div>

        {/* Letter Body */}
        <div className="text-md text-gray-800 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: letterText }} />
      </div>

      {/* Button to Download the Letter */}
      <div className="text-center mt-4">
        <button onClick={downloadLetter} className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
          Download Letter as PDF
        </button>
      </div>
    </div>
  );
};

export default GeneratedLetter;
