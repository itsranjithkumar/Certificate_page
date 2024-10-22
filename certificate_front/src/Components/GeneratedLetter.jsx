import React from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';

const GeneratedLetter = () => {
  const location = useLocation();
  const { letterText } = location.state || {};

  const downloadLetter = () => {
    const letterContent = document.getElementById("letter-content");
    html2canvas(letterContent).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'internship_letter.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Letter Content with Soft Gray Border */}
      <div id="letter-content" className="relative bg-gray-50 p-10 shadow-lg max-w-3xl mx-auto my-8 border-[12px] border-double border-gray-400 rounded-xl">
        
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto mb-4"
            style={{ maxWidth: '80px', height: 'auto' }}
          />
          <h1 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Engravers Old English, serif' }}>
            Magizh Technologies
          </h1>

          {/* Black Horizontal Line */}
          <div className="border-t-2 border-black my-2 w-full"></div> {/* Black horizontal line */}
          
          <p className="text-gray-500 italic"></p>
        </div>

        {/* Date Right-Aligned */}
        <div className="text-right mb-8 text-lg text-gray-600">
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        {/* Letter Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-700" style={{ fontFamily: 'Cursive, sans-serif' }}>
            Internship Completion Letter
          </h2>
        </div>

        {/* Letter Body */}
        <div className="text-lg text-gray-800 mb-12 leading-relaxed" dangerouslySetInnerHTML={{ __html: letterText }} />

        {/* Signature Section */}
        <div className="flex justify-between items-center mt-12"></div>
      </div>

      {/* Button to Download the Letter */}
      <div className="text-center mt-8">
        <button onClick={downloadLetter} className="bg-gray-700 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
          Download Letter
        </button>
      </div>
    </div>
  );
};

export default GeneratedLetter;
