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
        {/* Logo and Company Name Section */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center mb-2">
            {/* Logo on the left side with reduced size */}
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="mr-4" 
              style={{ maxWidth: '60px', height: 'auto' }} 
            />

            {/* Magizh Technologies in Engravers Old English font */}
            <p className="text-lg font-bold" style={{ fontFamily: 'Engravers Old English, serif', fontSize: '24px' }}>
              Magizh Technologies
            </p>
          </div>

          {/* Address Section */}
          {/* <p>JK Complex, Sathyamangalam - Mettupalayam Main Rd</p> */}
        </div>

        {/* Single black line under the combined section */}
        <div className="border-b-2 border-black mb-8"></div>

        {/* Date aligned to the right with label */}
        <div className="text-right mb-8">
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        {/* Heading for the Letter */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Internship Completion Letter</h2>
        </div>

        {/* Letter content without date above "Dear" */}
        <div dangerouslySetInnerHTML={{ __html: letterText.replace(/<p>.*<\/p>/, '') }} />

      </div>

      {/* Button to download the letter as an image */}
      <div className="text-center mt-8">
        <button onClick={downloadLetter} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Download Letter
        </button>
      </div>
    </div>
  );
};

export default GeneratedLetter;
