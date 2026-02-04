import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewExperienceCertificate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Employee Details
    employeeName: '',
    employeeId: '',
    designation: 'Software Engineer',
    department: 'Engineering',
    employmentType: 'Full-time',
    
    // Employment Period
    startDate: '',
    endDate: '',
    isCurrentlyWorking: false,
    
    // Company Details
    companyName: 'Magizh Technologies',
    companyAddress: '123 Tech Park, Chennai, India',
    companyPhone: '+91-XXXXXXXXXX',
    companyEmail: 'hr@magizhtech.com',
    companyWebsite: 'www.magizhtech.com',
    
    // Role & Responsibilities
    jobDescription: 'Developing and maintaining software applications, collaborating with team members',
    keyAchievements: [
      'Successfully delivered multiple projects on time and within budget',
      'Implemented key features that improved system performance by 30%'
    ].join('\n'),
    
    // Certificate Details
    issueDate: new Date().toISOString().split('T')[0],
    certificateId: `EXP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    
    // Signatory
    signatoryName: 'John Doe',
    signatoryDesignation: 'Head of Engineering',
    signatoryEmail: 'john.doe@magizhtech.com',
    signatoryPhone: '+91-XXXXXXXXXX'
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Basic validation
    if (!formData.employeeName.trim()) newErrors.employeeName = 'Employee name is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate && !formData.isCurrentlyWorking) newErrors.endDate = 'End date is required if not currently employed';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    navigate('/view-experience-certificate', { state: formData });
  };
  
  const handleKeyAchievementChange = (index, value) => {
    const achievements = formData.keyAchievements.split('\n');
    achievements[index] = value;
    setFormData(prev => ({
      ...prev,
      keyAchievements: achievements.join('\n')
    }));
  };
  
  const addAchievement = () => {
    setFormData(prev => ({
      ...prev,
      keyAchievements: prev.keyAchievements + '\n'
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Experience Certificate Generator</h1>
          <p className="text-gray-600">Fill in the employee details to generate a professional experience certificate</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Employee Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Employee Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.employeeName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="John Doe"
                />
                {errors.employeeName && (
                  <p className="text-sm text-red-600">{errors.employeeName}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="EMP-123"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Designation *</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.designation ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Software Engineer"
                />
                {errors.designation && (
                  <p className="text-sm text-red-600">{errors.designation}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Engineering"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Employment Period Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Employment Period</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.startDate && (
                  <p className="text-sm text-red-600">{errors.startDate}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    {formData.isCurrentlyWorking ? 'End Date' : 'End Date *'}
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isCurrentlyWorking"
                      checked={formData.isCurrentlyWorking}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        isCurrentlyWorking: e.target.checked,
                        endDate: e.target.checked ? '' : prev.endDate
                      }))}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isCurrentlyWorking" className="ml-2 block text-sm text-gray-700">
                      Currently Working
                    </label>
                  </div>
                </div>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  disabled={formData.isCurrentlyWorking}
                  className={`w-full px-4 py-2 border ${
                    errors.endDate ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    formData.isCurrentlyWorking ? 'bg-gray-100' : ''
                  }`}
                />
                {errors.endDate && (
                  <p className="text-sm text-red-600">{errors.endDate}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Company Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Company Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Magizh Technologies"
                />
                {errors.companyName && (
                  <p className="text-sm text-red-600">{errors.companyName}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Company Address</label>
                <input
                  type="text"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Tech Park, Chennai, India"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="hr@magizhtech.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <input
                  type="url"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="www.magizhtech.com"
                />
              </div>
            </div>
          </div>
          
          {/* Job Description & Achievements */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Role & Responsibilities</h2>
            
            <div className="space-y-2 mb-6">
              <label className="block text-sm font-medium text-gray-700">Job Description</label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe the primary responsibilities of the employee"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">Key Achievements</label>
                <button
                  type="button"
                  onClick={addAchievement}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  + Add Achievement
                </button>
              </div>
              {formData.keyAchievements.split('\n').map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-gray-500">•</span>
                  <input
                    type="text"
                    value={achievement}
                    onChange={(e) => handleKeyAchievementChange(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter achievement"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Signatory Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Authorized Signatory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="signatoryName"
                  value={formData.signatoryName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <input
                  type="text"
                  name="signatoryDesignation"
                  value={formData.signatoryDesignation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Head of Engineering"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="signatoryEmail"
                  value={formData.signatoryEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john.doe@magizhtech.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="signatoryPhone"
                  value={formData.signatoryPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
            </div>
          </div>
          
          {/* Certificate Details */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Certificate Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Certificate ID</label>
                <div className="flex">
                  <input
                    type="text"
                    name="certificateId"
                    value={formData.certificateId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      certificateId: `EXP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
                    }))}
                    className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    title="Generate new ID"
                  >
                    🔄
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Issue Date</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                // Fill with sample data for testing
                setFormData({
                  employeeName: 'John Doe',
                  employeeId: 'EMP-2024-001',
                  designation: 'Senior Software Engineer',
                  department: 'Engineering',
                  employmentType: 'Full-time',
                  startDate: '2022-01-15',
                  endDate: '2024-01-15',
                  isCurrentlyWorking: false,
                  companyName: 'Magizh Technologies',
                  companyAddress: '123 Tech Park, Chennai, India',
                  companyPhone: '+91-9876543210',
                  companyEmail: 'hr@magizhtech.com',
                  companyWebsite: 'www.magizhtech.com',
                  jobDescription: 'Developed and maintained web applications using modern JavaScript frameworks and cloud technologies.',
                  keyAchievements: 'Successfully led a team of 5 developers\nImproved application performance by 40%\nImplemented CI/CD pipeline reducing deployment time by 60%',
                  issueDate: new Date().toISOString().split('T')[0],
                  certificateId: `EXP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
                  signatoryName: 'Sarah Johnson',
                  signatoryDesignation: 'Head of Engineering',
                  signatoryEmail: 'sarah.j@magizhtech.com',
                  signatoryPhone: '+91-9876543211'
                });
              }}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
            >
              Fill Sample Data
            </button>
            <button
              type="submit"
              className="px-6 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
              </svg>
              Generate Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewExperienceCertificate;
