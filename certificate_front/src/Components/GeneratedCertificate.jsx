import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import '../App.css'; // Adjust the path according to your structure

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[900px] h-[600px] bg-white shadow-lg border border-gray-300" ref={certificateRef}>
        <div className="absolute top-5 left-0 right-0 flex justify-center z-10">
          <img src="/logo.png" alt="Logo" className="w-20 h-20" />
        </div>

        {state.selectedCertificate === 'certificate2' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-black">
            <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "Pacifico, cursive" }}>Indian Institute of Technology Madras</h1>
            <p className="text-lg italic mb-2" style={{ fontFamily: "serif" }}>hereby confers the degree of</p>
            <h2 className="text-2xl mb-4" style={{ fontFamily: "serif" }}>Bachelor of Science (B.S.)</h2>
            <p className="text-lg mb-2" style={{ fontFamily: "serif" }}>in</p>
            <h3 className="text-2xl mb-4" style={{ fontFamily: "serif" }}>Programming and Data Science</h3>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "Pacifico, cursive" }}>{state.name}</h2>
            <p className="text-center text-md italic mb-8" style={{ fontFamily: "serif" }}>
              Given this day of {state.issueDate} under the seal of the Institute.
            </p>

            <div className="flex justify-between w-[700px] text-md font-light">
              <div className="text-center">
                <p style={{ fontFamily: "serif" }}>Registrar</p>
              </div>
              <div className="text-center">
                <p style={{ fontFamily: "serif" }}>Director</p>
              </div>
              <div className="text-center">
                <p className="font-bold" style={{ fontFamily: "serif" }}>Vijay P.</p>
                <p style={{ fontFamily: "serif" }}>CEO, MagizhTech</p>
              </div>
            </div>
          </div>
        )}

        {state.selectedCertificate === 'certificate1' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-black">
            <h1 className="text-4xl font-bold mb-2 text-red-500" style={{ fontFamily: "serif" }}>Certificate of Accomplishment</h1>
            <p className="text-lg italic mb-10" style={{ fontFamily: "serif" }}>{state.course}</p>
            <h2 className="text-4xl font-bold mb-2 text-red-500" style={{ fontFamily: "serif" }}>Presented to</h2>
            <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "Pacifico, cursive" }}>{state.name}</h1>
            <p className="text-center text-md italic mb-8" style={{ fontFamily: "serif" }}>
              In recognition of successfully completing the program with excellent performance.
            </p>

            <div className="flex justify-between w-[700px] text-md font-light">
              <div>
                <p><strong>Issue Date:</strong> {state.issueDate}</p>
                <p><strong>Certificate ID:</strong> {state.certificateId}</p>
              </div>
              <div className="text-right">
                <p className="font-bold" style={{ fontFamily: "serif" }}>Vijay P.</p>
                <p style={{ fontFamily: "serif" }}>CEO, MagizhTech</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default GeneratedCertificate;
