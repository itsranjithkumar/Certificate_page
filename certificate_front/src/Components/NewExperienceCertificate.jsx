import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, FileText, User, Calendar, Briefcase, Building2 } from 'lucide-react';

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

  const loadSampleData = () => {
    setFormData({
      employeeName: 'John Doe',
      employeeId: 'EMP12345',
      designation: 'Senior Software Engineer',
      department: 'Engineering',
      employmentType: 'Full-time',
      startDate: '2022-01-15',
      endDate: '2024-02-15',
      isCurrentlyWorking: false,
      companyName: 'Magizh Technologies',
      companyAddress: '123 Tech Park, Chennai, India',
      companyPhone: '+91-9876543210',
      companyEmail: 'hr@magizhtech.com',
      companyWebsite: 'www.magizhtech.com',
      jobDescription: 'Developing and maintaining software applications, collaborating with team members',
      keyAchievements: [
        'Successfully delivered multiple projects on time and within budget',
        'Implemented key features that improved system performance by 30%',
        'Mentored junior developers and conducted code reviews'
      ].join('\n'),
      issueDate: new Date().toISOString().split('T')[0],
      certificateId: `EXP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      signatoryName: 'Jane Smith',
      signatoryDesignation: 'Head of Engineering',
      signatoryEmail: 'jane.smith@magizhtech.com',
      signatoryPhone: '+91-9876543211'
    });
  };

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
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-16 sm:pb-24">
        <button 
          onClick={() => window.history.back()}
          className="text-gray-600 hover:text-gray-900 mb-12 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 mb-4">
            Experience Certificate
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Generate professional experience certificates for your employees with detailed information about their roles and achievements.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Employee Details */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Employee Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Full Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="John Doe"
                />
                {errors.employeeName && (
                  <p className="text-sm text-red-600 mt-2">{errors.employeeName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Employee ID</label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="EMP-123"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Software Engineer"
                />
                {errors.designation && (
                  <p className="text-sm text-red-600 mt-2">{errors.designation}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Engineering"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Employment Type</label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Employment Period */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Employment Period</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                />
                {errors.startDate && (
                  <p className="text-sm text-red-600 mt-2">{errors.startDate}</p>
                )}
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm text-gray-600">
                    {formData.isCurrentlyWorking ? 'End Date' : 'End Date'}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isCurrentlyWorking"
                      checked={formData.isCurrentlyWorking}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        isCurrentlyWorking: e.target.checked,
                        endDate: e.target.checked ? '' : prev.endDate
                      }))}
                      className="h-4 w-4 accent-gray-900"
                    />
                    <label htmlFor="isCurrentlyWorking" className="text-sm text-gray-600 cursor-pointer">
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
                  className={`w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent ${
                    formData.isCurrentlyWorking ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                />
                {errors.endDate && (
                  <p className="text-sm text-red-600 mt-2">{errors.endDate}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Company Details */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Company Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Magizh Technologies"
                />
                {errors.companyName && (
                  <p className="text-sm text-red-600 mt-2">{errors.companyName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Company Address</label>
                <input
                  type="text"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="123 Tech Park, Chennai, India"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Phone</label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Email</label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="hr@magizhtech.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Website</label>
                <input
                  type="url"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="www.magizhtech.com"
                />
              </div>
            </div>
          </div>
          
          {/* Role & Responsibilities */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Role & Responsibilities</h2>
            
            <div className="mb-12">
              <label className="block text-sm text-gray-600 mb-4">Job Description</label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                rows={2}
                className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent resize-none"
                placeholder="Describe the primary responsibilities of the employee"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-8">
                <label className="block text-sm text-gray-600">Key Achievements</label>
                <button
                  type="button"
                  onClick={addAchievement}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light"
                >
                  + Add
                </button>
              </div>
              {formData.keyAchievements.split('\n').map((achievement, index) => (
                <div key={index} className="mb-8">
                  <input
                    type="text"
                    value={achievement}
                    onChange={(e) => handleKeyAchievementChange(index, e.target.value)}
                    className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                    placeholder="Enter achievement"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Signatory Details */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Authorized Signatory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Name</label>
                <input
                  type="text"
                  name="signatoryName"
                  value={formData.signatoryName}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Designation</label>
                <input
                  type="text"
                  name="signatoryDesignation"
                  value={formData.signatoryDesignation}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Head of Engineering"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Email</label>
                <input
                  type="email"
                  name="signatoryEmail"
                  value={formData.signatoryEmail}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="john.doe@magizhtech.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Phone</label>
                <input
                  type="tel"
                  name="signatoryPhone"
                  value={formData.signatoryPhone}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
            </div>
          </div>
          
          {/* Certificate Details */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Certificate Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Certificate ID</label>
                <div className="flex gap-4 items-end">
                  <input
                    type="text"
                    name="certificateId"
                    value={formData.certificateId}
                    onChange={handleChange}
                    className="flex-1 text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      certificateId: `EXP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
                    }))}
                    className="text-sm text-gray-600 hover:text-gray-900 font-light pb-3 whitespace-nowrap"
                    title="Generate new ID"
                  >
                    🔄
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-4">Issue Date</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <button
              type="button"
              onClick={loadSampleData}
              className="px-8 py-3 text-gray-900 font-light hover:bg-gray-100 rounded transition-colors"
            >
              Load Sample
            </button>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-8 py-3 text-gray-900 font-light hover:bg-gray-100 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gray-900 text-white font-light rounded hover:bg-gray-800 transition-colors"
              >
                Generate Certificate
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
  );
};

export default NewExperienceCertificate;
