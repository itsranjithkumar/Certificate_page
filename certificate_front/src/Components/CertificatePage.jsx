// src/components/CertificatePage.jsx
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/generated-certificate', { state: formData });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Generate Your Certificate</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border"
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={formData.course}
          onChange={handleChange}
          className="p-2 border"
          required
        />
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          className="p-2 border"
          required
        />
        <input
          type="text"
          name="certificateId"
          placeholder="Certificate ID"
          value={formData.certificateId}
          onChange={handleChange}
          className="p-2 border"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Generate Certificate
        </button>
      </form>
    </div>
  );
};

export default CertificatePage;
