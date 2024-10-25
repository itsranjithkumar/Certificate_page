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
        className="relative w-[1600px] h-[1000px] bg-white shadow-lg p-8 overflow-hidden"
        ref={certificateRef}
        style={{
          background: '#f8f8f8',
          border: '10px double #D4AF37',
          padding: '40px',
          position: 'relative',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Watermark Background */}
        <div
          style={{
            position: 'absolute',
            opacity: 0.2,
            top: '50%',
            left: '52%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img
            src="/logo.png"
            alt="Watermark Logo"
            className="w-[300px] h-[300px]"
          />
        </div>

        {/* Certificate Content */}
        <div className="relative z-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-2">
            <img
              src="/logo.png"
              alt="Organization Logo"
              className="w-20 h-30 mb-8"
              style={{ filter: 'drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))' }}
            />
          </div>

          {/* Certificate Title */}
          <h1
            className="text-5xl font-bold text-center mb-4 text-black"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            Certificate of Course Completion
          </h1>

          {/* Subtitle */}
          <p className="text-center text-2xl italic mb-6 text-gray-600">
            This certifies that
          </p>

          {/* Name Section */}
          <h2
            className="text-4xl font-bold text-center mb-6 text-black"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            {state.name}
          </h2>

          {/* Completion Text */}
          <p className="text-center text-2xl italic mb-6 text-gray-800">
            has successfully completed the FULL STACK DEVELOPER program.
          </p>

          {/* Course Duration */}
          <p className="text-center text-2xl italic mb-6 text-gray-800">
            Completed in 3 months
          </p>

          {/* Program Details */}
          <div className="text-center text-2xl text-gray-700 mb-6 font-serif">
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
          <div className="flex justify-between w-[1100px] mx-auto text-lg text-gray-600 mb-6">
            <div className="text-left">
              <p className="text-2xl"><strong>Organization:</strong> Magizh Technologies</p>
              <p className="text-2xl"><strong>Issue Date:</strong> {state.issueDate}</p>
            </div>

            <div className="text-right">
              <p className="text-2xl"><strong>Certificate ID:</strong> {state.certificateId}</p>
            </div>
          </div>

          {/* Seal and Signature Section */}
          <div className="flex justify-between w-[1100px] mx-auto text-xl text-gray-700 mt-4 border-t border-gray-300 pt-4">
            {/* Seal Section */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/Magizh Technologies.png"
                alt="Seal Logo"
                className="w-36 h-36"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))', // Adds a subtle shadow around the seal
                }}
              />

              <img
                src="http://127.0.0.1:8000/generate_qr?id=jgfhgfj"
                alt="QR Code"
                className="w-36 h-36"
                style={{
                  position: 'absolute',
                  top: '30px',  // Adjust position if necessary
                  right: '25px',  // Adjust position if necessary
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                }}
              />
            </div>

            {/* Signature Section */}
            <div className="relative text-center" style={{ marginRight: '0px', textAlign: 'right', marginTop: '-40px' }}>
              <img
                src="/sig.png"
                alt="Signature"
                className="w-[170px] h-auto mb-2"
                style={{
                  position: 'relative',
                  top: '10px',
                  marginBottom: '-20px',
                  right: '-130px',
                }}
              />
              <p className="font-bold text-2xl text-gray-700" style={{ marginBottom: '-10px', transform: 'translateY(-20px)' }}>
                Vijay P.
              </p>
              <p className="text-2xl text-gray-700">CEO, Magizh Technologies</p>
            </div>
          </div>

          {/* Verification Section */}
          <div className="text-center mt-6">
            <p className="text-xl text-gray-600">
              For certificate verification, please visit:
              <a
                href="https://www.magizhtechnologies.com/certificates/verify"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.magizhtechnologies.com
              </a>
            </p>
            <p className="text-xl text-gray-600">Certificate ID: {state.certificateId}</p>
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
