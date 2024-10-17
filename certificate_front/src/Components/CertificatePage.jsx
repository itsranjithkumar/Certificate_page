// src/Components/CertificatePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CertificatePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    issueDate: '',
    certificateId: ''
  });

  const navigate = useNavigate();

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the GeneratedCertificate page and pass formData as state
    navigate('/generated-certificate', { state: formData });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <h1 className="text-4xl font-bold mb-8">Generate Certificate</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        {/* Course Selection Dropdown */}
        <div className="mb-4">
          <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Select Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="border rounded-md w-full p-2"
          >
            <option value="">Select Course</option>
            <option value="FULL STACK DEVELOPER (Course Complete)">
              FULL STACK DEVELOPER (Course Completed)
            </option>
            <option value="FULL STACK DEVELOPER (Internship complete)">
              FULL STACK DEVELOPER (Internship completed)
            </option>
            <option value="MCQ Test Certificate">MCQ Test Certificate</option>
            <option value="Python Certificate">Python Certificate</option>
            <option value="SQL Certificate">SQL Certificate</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700 mb-2">Issue Date</label>
          <input
            type="date"
            id="issueDate"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-2">Certificate ID</label>
          <input
            type="text"
            id="certificateId"
            name="certificateId"
            value={formData.certificateId}
            onChange={handleChange}
            required
            className="border rounded-md w-full p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Generate Certificate
        </button>
      </form>
    </div>
  );
};

export default CertificatePage;
