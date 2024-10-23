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
      margin: [0.5, 0.5], // Adjust margins as needed
      filename: 'internship_letter.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true }, // Use a higher scale for better quality
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all' }, // Prevent page breaks within content
    };

    // Generate and download PDF
    html2pdf().from(letterContent).set(opt).save().then(() => {
      // Re-add shadow after the PDF download is done
      letterContent.classList.add('shadow-lg');
    });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Letter Content with Zoom Effect */}
      <div
        id="letter-content"
        className="relative bg-gray-50 p-10 max-w-3xl mx-auto my-8 border-[12px] border-double border-gray-400 rounded-xl shadow-lg"
        style={{ transform: 'scale(1.05)', transformOrigin: 'top left' }} // Slightly zoom content
      >
        
        {/* Logo and Header */}
        <div className="text-center mb-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto mb-1 rounded-full" // Adjusted margin to move the logo closer to the top
            style={{ width: '80px', height: '80px' }} // Set width and height for the logo
          />
          <h1 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Engravers Old English, serif' }}>
            Magizh Technologies
          </h1>

          {/* Black Horizontal Line */}
          <div className="border-t-2 border-black my-2 w-full"></div>
        </div>

        {/* Date Right-Aligned */}
        <div className="text-right mb-6 text-lg text-gray-600">
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        {/* Letter Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700" style={{ fontFamily: 'Cursive, sans-serif' }}>
            Internship Completion Letter
          </h2>
        </div>

        {/* Letter Body */}
        <div className="text-md text-gray-800 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: letterText }} />
        
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
