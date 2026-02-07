import React from 'react';
import { useLocation } from 'react-router-dom';

const GeneratedLetter = () => {
  const location = useLocation();
  const { letterText } = location.state || {}; // Extract letterText from location state

  const downloadLetter = async () => {
    const letterContent = document.getElementById("letter-content");
    if (!letterContent) return;

    // Temporarily remove shadow before downloading PDF
    letterContent.classList.remove('shadow-lg');

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      
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
      await html2pdf()
        .from(letterContent)
        .set(opt)
        .save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      // Always re-add shadow regardless of success/failure
      letterContent.classList.add('shadow-lg');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Letter Content with a double gold border */}
      <div
        id="letter-content"
        className="relative p-4 max-w-3xl mx-auto my-4 shadow-lg"
        style={{
          fontSize: '0.9rem',
          padding: '1rem',
          background: '#fff', // White background
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          border: '5px double gold', // Double gold border
          borderRadius: '0' // Square corners
        }}
      >
        {/* Watermark Logo at Center, Slightly to the Right and Down */}
        <img
          src="/logo.png"
          alt="Watermark Logo"
          className="absolute inset-0 m-auto w-[300px] h-[300px] opacity-30 filter brightness-1300 pointer-events-none"
          style={{
            left: '50%', // Move slightly to the right
            top: '20%', // Move slightly down
            transform: 'translateY(-50%) translateX(-50%)' // Center watermark properly
          }}
        />

        {/* Inner content box with white background */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '1.25rem', // Padding inside the content box
            borderRadius: '0', // Keep the inner box corners square
          }}
        >
          {/* Logo and Header */}
          <div className="text-center mb-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="mx-auto mb-2"
              style={{ width: '100px', height: '110px' }}
            />
            <h1
              className="text-2xl font-bold text-gray-800"
              style={{ fontFamily: "'UnifrakturMaguntia', cursive", fontSize: '2.5rem' }} // Updated font
            >
              Magizh Technologies
            </h1>

            {/* Gold Horizontal Line */}
            <div className="border-t-4 border-gold my-6 w-full"></div>
          </div>

          {/* Date Right-Aligned */}
          <div className="text-right mb-4 text-lg text-gray-600">
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          </div>

          {/* Letter Heading */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-700" style={{ fontFamily: "'UnifrakturMaguntia', cursive" }}>
              Internship Completion Letter
            </h2>
          </div>

          {/* Letter Body */}
          <div 
            className="text-md text-gray-800 mb-4 leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: letterText || "<p>No letter content available.</p>" }} // Handle case when letterText is not provided
          />
        </div>
      </div>

      {/* Button to Download the Letter */}
      <div className="text-center mt-4">
        <button 
          onClick={downloadLetter} 
          className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Download Letter as PDF
        </button>
      </div>
    </div>
  );
};

export default GeneratedLetter;
