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
        className="relative w-[1300px] h-[850px] bg-white shadow-lg p-8 overflow-hidden"
        ref={certificateRef}
        style={{
          background: '#f8f8f8',
          border: '10px double #D4AF37', // Elegant double gold borders
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Inner Thin Border */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            bottom: '20px',
            border: '2px solid #D4AF37', // Thin inner border for sophistication
            borderRadius: '10px',
          }}
        ></div>

        {/* Certificate Content */}
        <div className="relative z-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-2">
            <img
              src="/logo.png"
              alt="Organization Logo"
              className="w-17 h-20 mb-5" // Adjusted size for a more balanced look
            />
            <h4 className="text-2xl font-semibold text-center text-black">
              Magizh Technologies
            </h4>
          </div>

          {/* Certificate Title */}
          <h1 
            className="text-5xl font-bold text-center mb-4 text-black" 
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            Certificate of Course Completion
          </h1>

          {/* Subtitle */}
          <p className="text-center text-lg italic mb-6 text-gray-600">
            This certifies that
          </p>

          {/* Name Section */}
          <h2 className="text-4xl font-bold text-center mb-6 text-black" style={{ fontFamily: 'Pacifico, cursive' }}>
            {state.name}
          </h2>

          {/* Completion Text */}
          <p className="text-center text-xl italic mb-6 text-gray-800">
            has successfully completed the FULL STACK DEVELOPER program.
          </p>

          {/* Program Details */}
          <div className="text-center text-lg text-gray-700 mb-6">
            <p>
              This program covered front-end development using React and Tailwind CSS, 
              as well as back-end technologies like FastAPI and SQLAlchemy.
            </p>
            <p>
              The recipient demonstrated proficiency in building RESTful APIs,
              database management, and deploying applications.
            </p>
            <p>
              Practical hands-on experience included integrating third-party services
              and version control systems like Git.
            </p>
          </div>

          {/* Organization and Date Section */}
          <div className="flex justify-between w-[1000px] mx-auto text-lg text-gray-600 mb-6">
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
              <div className="w-24 h-24 flex items-center justify-center border-solid border-4 border-gold bg-white -mt-3 rounded-full">
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
