import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CertificatePage = () => {
  const [name, setName] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [certificateId, setCertificateId] = useState(""); // Added certificate ID
  const [selectedCertificate, setSelectedCertificate] = useState("");
  
  const navigate = useNavigate();

  const generateCertificate = () => {
    const certificateData = {
      name,
      issueDate,
      certificateId,
      selectedCertificate,
      course: "Programming and Data Science"
    };

    navigate("/generate-certificate", { state: certificateData }); // Navigate to GeneratedCertificate page
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Generate Your Certificate</h1>

      {/* Form to collect details */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Issue Date
          </label>
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Certificate ID
          </label>
          <input
            type="text"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Certificate
          </label>
          <select
            onChange={(e) => setSelectedCertificate(e.target.value)}
            className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select</option>
            <option value="certificate1">Certificate 1</option>
            <option value="certificate2">Certificate 2</option>
          </select>
        </div>

        <button
          type="button"
          onClick={generateCertificate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificatePage;
