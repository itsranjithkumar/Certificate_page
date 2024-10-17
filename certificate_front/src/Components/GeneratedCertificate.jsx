// src/components/GeneratedCertificate.jsx
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const GeneratedCertificate = () => {
  const { state } = useLocation(); // Get formData passed from the form
  const certificateRef = useRef(); // Ref for the certificate div

  const handleDownload = () => {
    if (certificateRef.current) {
      const opt = {
        margin: 0.5,
        filename: 'certificate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      html2pdf().from(certificateRef.current).set(opt).save();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Certificate Container */}
      <div
        className="certificate-box bg-white py-10 px-14 shadow-2xl rounded-xl border-8 border-gray-300 max-w-4xl relative"
        ref={certificateRef}
      >
        {/* Outer Border */}
        <div className="absolute inset-0 border-4 border-gray-400 rounded-xl pointer-events-none"></div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-20 h-20 rounded-full border-4 border-gray-300"
          />
        </div>

        {/* Certificate Title */}
        <h1 className="text-4xl font-serif font-bold mb-2 text-black tracking-wide text-center">
          Certificate of Excellence
        </h1>

        {/* Sub-title */}
        <p className="text-lg text-gray-600 italic mb-6 text-center">
          {state.course} (Intermediate)
        </p>

        {/* Presented To */}
        <h2 className="text-2xl text-gray-600 mb-2 text-center">
          Presented to
        </h2>
        <h1 className="text-5xl font-bold text-black mb-4 tracking-tight text-center underline">
          {state.name}
        </h1>

        {/* Certification Text */}
        <p className="text-md text-gray-600 italic mb-8 leading-relaxed text-center">
          The holder of this certificate has successfully completed the certification exam.
        </p>

        {/* Certification Info */}
        <div className="flex justify-between mt-8 text-gray-600 text-lg">
          <div>
            <p><strong className="text-black">Date Issued:</strong> {state.issueDate}</p>
            <p><strong className="text-black">Certificate ID:</strong> {state.certificateId}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-black">John Doe</p>
            <p>CTO, Certification Authority</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleDownload}
          className="bg-black text-white px-8 py-4 text-xl rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition duration-300"
        >
          Download Certificate as PDF
        </button>
      </div>
    </div>
  );
};

export default GeneratedCertificate;
