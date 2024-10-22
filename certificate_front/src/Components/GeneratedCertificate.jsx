import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

const GeneratedCertificate = () => {
  const { state } = useLocation();
  const certificateRef = useRef();

  const handleDownload = () => {
    const doc = new jsPDF();
    if (certificateRef.current) {
      toPng(certificateRef.current).then((dataUrl) => {
        doc.addImage(dataUrl, 'PNG', 10, 10, 190, 0);
        doc.save('certificate.pdf');
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Certificate Container */}
      <div
        className="relative w-[900px] h-[600px] bg-white shadow-lg border-[8px] border-solid border-gray-300 rounded-xl p-10"
        ref={certificateRef}
      >
        {/* Decorative Border */}
        <div className="absolute inset-0 border-[4px] border-dashed border-gray-500 rounded-lg pointer-events-none" />

        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png" // Adjust path for your logo
            alt="Company Logo"
            className="w-20 h-20" // Reduced size of the logo
            style={{ marginTop: '10px' }} // Adjusted margin for better positioning
          />
        </div>

        {/* Certificate Title */}
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800" style={{ fontFamily: 'serif' }}>
          Certificate of Achievement
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg italic mb-10 text-gray-600">
          This is to certify that
        </p>

        {/* Name Section */}
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: 'Pacifico, cursive' }}>
          {state.name}
        </h2>

        {/* Course or Achievement */}
        <p className="text-center text-xl italic mb-8 text-gray-700">
          has successfully completed the {state.course} program
        </p>

        {/* Issue Date and Certificate ID */}
        <div className="flex justify-between w-[700px] mx-auto text-lg text-gray-600 mb-8">
          <div className="text-left">
            <p><strong>Issue Date:</strong> {state.issueDate}</p>
          </div>
          <div className="text-right">
            <p><strong>Certificate ID:</strong> {state.certificateId}</p>
          </div>
        </div>

        {/* Signature Section */}
        <div className="flex justify-between w-[700px] mx-auto text-lg text-gray-700">
          <div className="text-center">
            <p className="font-bold">John Doe</p>
            <p>Course Instructor</p>
          </div>
          <div className="text-center">
            <p className="font-bold">Vijay P.</p>
            <p>CEO, MagizhTech</p> {/* Updated title and name */}
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-8">
        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default GeneratedCertificate;
