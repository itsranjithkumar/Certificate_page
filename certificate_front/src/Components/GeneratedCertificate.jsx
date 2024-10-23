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
        className="relative w-[1300px] h-[850px] bg-white shadow-lg border-8 border-yellow-500 rounded-xl p-8" // Slightly increased dimensions
        ref={certificateRef}
      >
        {/* Ornate Decorative Border */}
        <div className="absolute inset-0 border-12 border-double border-yellow-500 rounded-lg pointer-events-none">
          <div className="absolute inset-4 border-6 border-solid border-yellow-500 rounded-lg pointer-events-none"></div>
        </div>

        {/* Logo Section (Top, Minimized) */}
        <div className="flex flex-col items-center mb-2" style={{ marginTop: '20px' }}>
          <img
            src="/logo.png"
            alt="Organization Logo"
            className="w-50 h-20"
          />
          <h4 className="text-3xl font-semibold text-center mt-2 text-black">
            Magizh Technologies
          </h4>
        </div>

        {/* Certificate Title */}
        <h1 className="text-5xl font-bold text-center mb-4 text-black" style={{ fontFamily: 'serif' }}>
          Certificate of Course Completion
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg italic mb-6 text-gray-700">
          This is to certify that
        </p>

        {/* Name Section */}
        <h2 className="text-4xl font-bold text-center mb-6 text-black" style={{ fontFamily: 'Pacifico, cursive' }}>
          {state.name}
        </h2>

        {/* Course or Achievement */}
        <p className="text-center text-xl italic mb-6 text-gray-800">
          has successfully completed the FULL STACK DEVELOPER (Course Completed) program
        </p>

        {/* Additional Points */}
        <ul className="text-center text-lg text-gray-700 mb-6">
          <li>Proficient in front-end technologies including React and Tailwind CSS.</li>
          <li>Skilled in back-end development using FastAPI and SQLAlchemy.</li>
          <li>Experience in building RESTful APIs and integrating third-party services.</li>
          <li>Strong understanding of database management and deployment strategies.</li>
          <li>Hands-on experience with version control systems like Git.</li>
        </ul>

        {/* Organization and Date Section (Shifted Left) */}
        <div className="flex justify-between w-[1000px] mx-auto text-lg text-gray-600 mb-6"> {/* Adjusted width */}
          <div className="text-left">
            <p><strong>Organization:</strong> Magizh Technologies</p>
            <p><strong>Issue Date:</strong> {state.issueDate}</p>
          </div>

          <div className="text-right">
            <p><strong>Certificate ID:</strong> {state.certificateId}</p>
          </div>
        </div>

        {/* Seal and Signature Section */}
        <div className="flex justify-between w-[1000px] mx-auto text-lg text-gray-700 mt-6 border-t border-gray-300 pt-6">
          {/* Seal Section */}
          <div className="flex flex-col items-center text-center">
            <p className="font-bold text-md text-gray-700 mb-5">Official Seal</p>
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-solid border-4 border-gold bg-white -mt-3">
              <img
                src="/Magizh Technologies.png"
                alt="Seal Logo"
                className="w-20 h-20 rounded-full"
              />
            </div>
          </div>

          {/* Signature Section */}
          <div className="text-right">
            <p className="font-bold text-lg text-gray-700">Vijay P.</p>
            <p>CEO, Magizh Technologies</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-8">
        <button
          onClick={handleDownload}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default GeneratedCertificate;
