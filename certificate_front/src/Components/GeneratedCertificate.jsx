// src/Components/GeneratedCertificate.jsx
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';


const GeneratedCertificate = () => {
  const { state } = useLocation(); // Get formData passed from the form
  const certificateRef = useRef(); // Ref for the certificate div

  const handleDownload = () => {
    const doc = new jsPDF();
    if (certificateRef.current) {
      toPng(certificateRef.current).then((dataUrl) => {
        doc.addImage(dataUrl, 'PNG', 10, 10, 190, 0); // Fit image to page
        doc.save('certificate.pdf'); // Download as PDF
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div
        className="certificate-box bg-white p-12 shadow-2xl rounded-xl border-[20px] border-gray-300 max-w-4xl relative"
        ref={certificateRef}
      >
        {/* Decorative border */}
        <div className="absolute inset-0 border-[8px] border-dashed border-gray-400 rounded-xl pointer-events-none"></div>

        {/* Simple "M" Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 flex items-center justify-center bg-indigo-500 text-white text-5xl font-bold rounded-full border-4 border-gray-200">
            M
          </div>
        </div>

        {/* Certificate Title */}
        <h1 className="text-5xl font-serif font-bold mb-2 text-gray-700 tracking-wide">
          Certificate of Accomplishment
        </h1>

        {/* Sub-title */}
        <p className="text-lg text-indigo-600 italic tracking-widest mb-10">
          {state.course}
        </p>

        {/* Presented To */}
        <h2 className="text-2xl text-gray-500 mb-4 font-light">Presented to</h2>
        <h1 className="text-6xl font-bold text-black mb-4 tracking-tight underline decoration-indigo-600">
          {state.name} {/* Ensure state.name is passed correctly */}
        </h1>

        {/* Certification Text */}
        <p className="text-md text-gray-600 italic mb-6 leading-relaxed">
          The bearer of this certificate has passed the Magizh Technologies
          skill certification test.
        </p>

        {/* Certification Info */}
        <div className="flex justify-between text-left mt-8 text-gray-700 text-lg font-light">
          <div>
            <p><strong>Earned on:</strong> {state.issueDate}</p>
            <p><strong>ID:</strong> {state.certificateId}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">Harishankaran K</p>
            <p>CTO, HackerRank</p>
          </div>
        </div>
      </div>

      {/* Centered and Enlarged Download Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-16 py-5 text-2xl rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default GeneratedCertificate;










