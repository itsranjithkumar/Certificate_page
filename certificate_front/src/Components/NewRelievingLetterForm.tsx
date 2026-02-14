import React, { useState, ChangeEvent, FormEvent, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RelievingLetterData {
  companyName: string
  employeeName: string
  employeeId: string
  designation: string
  department: string
  startDate: string
  endDate: string
  reasonForRelief: string
  companyCEO: string
  companyAddress: string
  letterDate: string
}

export function NewRelievingLetterForm() {
  const navigate = useNavigate();
  const modules = useMemo(() => ({
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ],
  }), []);

  const [formData, setFormData] = useState<RelievingLetterData>({
    companyName: '',
    employeeName: '',
    employeeId: '',
    designation: '',
    department: '',
    startDate: '',
    endDate: '',
    reasonForRelief: '',
    companyCEO: '',
    companyAddress: '',
    letterDate: new Date().toISOString().split('T')[0],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loadSampleData = (): void => {
    setFormData({
      companyName: 'Magizh Technologies',
      employeeName: 'John Doe',
      employeeId: 'EMP12345',
      designation: 'Senior Software Engineer',
      department: 'Engineering',
      startDate: '2022-01-15',
      endDate: '2024-02-15',
      reasonForRelief: 'Pursuing better career opportunities',
      companyCEO: 'Jane Smith',
      companyAddress: '123 Tech Park, Chennai, Tamil Nadu - 600001',
      letterDate: new Date().toISOString().split('T')[0],
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // Format the letter with placeholders
    const formattedLetter = formData.reasonForRelief
      .replace(/\{\{employeeName\}\}/g, formData.employeeName)
      .replace(/\{\{designation\}\}/g, formData.designation)
      .replace(/\{\{companyName\}\}/g, formData.companyName)
      .replace(/\{\{startDate\}\}/g, new Date(formData.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))
      .replace(/\{\{endDate\}\}/g, new Date(formData.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    
    const submissionData = {
      ...formData,
      formattedLetter
    };

    console.log('Form submitted with data:', submissionData);
    const encodedData = encodeURIComponent(JSON.stringify(submissionData));
    const path = `/relieving-letter/preview?data=${encodedData}`;
    console.log('Navigating to:', path);
    // Force a full page navigation to ensure the route is handled correctly
    window.location.href = path;
  }

  // Add missing ChevronLeft import
  const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-16 sm:pb-24">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-12 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 mb-4">
            Relieving Letter
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Create a professional relieving letter for employees leaving your organization.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Company Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Company Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-base border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all hover:border-slate-300 bg-slate-50 focus:bg-white"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Company Address *
                </label>
                <textarea
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 text-base border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all hover:border-slate-300 bg-slate-50 focus:bg-white resize-none"
                  placeholder="Enter complete company address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  CEO Name *
                </label>
                  <input
                    type="text"
                    name="companyCEO"
                    value={formData.companyCEO}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all hover:border-slate-300 bg-slate-50 focus:bg-white"
                    placeholder="Enter CEO name"
                  />
                </div>
              </div>
            </div>

          {/* Employee Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Employee Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleChange}
                  required
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Enter employee name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="block text-sm text-gray-600 mb-4">Employee ID</label>
                  <input
                    type="text"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    required
                    className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                    placeholder="Enter ID"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-4">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                    placeholder="Enter department"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-4">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Enter designation"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="block text-sm text-gray-600 mb-4">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-4">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Letter Content */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Letter Content</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-4">
                  Letter Body
                  <span className="text-xs text-gray-500 block mt-2">
                    Use {'{{employeeName}}'}, {'{{designation}}'}, and other placeholders
                  </span>
                </label>
                <div className="border-b border-gray-300">
                  <ReactQuill
                    theme="snow"
                    value={formData.reasonForRelief}
                    onChange={(value: string) => setFormData(prev => ({ ...prev, reasonForRelief: value }))}
                    modules={modules}
                    placeholder="Type your letter content here..."
                    className="bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-4">Letter Issue Date</label>
                <input
                  type="date"
                  name="letterDate"
                  value={formData.letterDate}
                  onChange={handleChange}
                  required
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
            <button
              type="button"
              onClick={loadSampleData}
              className="px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
            >
              Load Sample Data
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Generate Letter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
