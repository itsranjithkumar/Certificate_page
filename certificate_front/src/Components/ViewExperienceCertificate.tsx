'use client';

import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface CertificateData {
  employeeName?: string;
  employeeId?: string;
  designation?: string;
  department?: string;
  startDate?: string;
  endDate?: string;
  jobDescription?: string;
  keyAchievements?: string;
  companyName?: string;
  companyAddress?: string;
  hrName?: string;
  hrEmail?: string;
  hrPhone?: string;
  signatoryName?: string;
  signatoryDesignation?: string;
  issueDate?: string;
  certificateId?: string;
  isCurrentlyWorking?: boolean;
  employmentType?: string;
  companyPhone?: string;
}

interface ViewExperienceCertificateProps {
  data?: CertificateData;
}

const ViewExperienceCertificate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const state = location.state || {};
  const {
    employeeName = 'John Doe',
    employeeId = 'EMP-XXXXX',
    designation = 'Software Engineer',
    department = 'Engineering',
    startDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    endDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    jobDescription = 'various responsibilities',
    keyAchievements = 'demonstrated exceptional performance',
    companyName = 'Magizh Technologies',
    companyAddress = '123 Tech Park, Chennai, India',
    hrName = 'HR Manager',
    hrEmail = 'hr@magizhtech.com',
    hrPhone = '+91-XXXXXXXXXX',
    signatoryName = 'HR Manager',
    signatoryDesignation = 'Director',
    issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    certificateId = `EXP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    isCurrentlyWorking = false,
    employmentType = 'Full-time',
    companyPhone = '+91-XXXXXXXXXX'
  } = state;

  useEffect(() => {
    if (!location.state) {
      navigate('/experience-certificate');
    }
  }, [location.state, navigate]);

  const downloadPdf = async () => {
    if (!certificateRef.current) return;

    const element = certificateRef.current;
    const opt = {
      margin: 10,
      filename: `${employeeName}-Experience-Certificate.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      // Generate PDF
      await html2pdf()
        .set(opt)
        .from(element)
        .save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-slate-900 mb-2 tracking-tight">Experience Certificate</h1>
          <p className="text-slate-500 text-lg font-light">Professional credential</p>
        </div>
        
        {/* Certificate Container */}
        <div 
          ref={certificateRef}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-black p-10"
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            margin: '2rem',
            position: 'relative'
          }}
        >
          {/* Decorative accent lines */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-black rounded-lg"></div>
          
          {/* Certificate Header */}
          <div className="text-center mb-12 relative z-10">
            {/* Company Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="h-24 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDA3OGQ3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTMgOXY2YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMlY5TTMgOWwtMS41LTIgMS41LTJNIDVoMTZsMS41IDJMMjAgOU0zIDE1bDEuNSAyIDEuNS0yTTIwIDE1bC0xLjUgMiAxLjUgMk0xMiA5djZNOSAxMmw2LTYiLz48L3N2Zz4=';
                }}
              />
            </div>
            
            <h1 className="text-5xl font-light text-slate-800 mb-3 tracking-tight">Certificate of Experience</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto my-6"></div>
            <p className="text-slate-500 text-sm font-medium tracking-[0.3em] uppercase mb-2">Professional Credential</p>
          </div>
          
          {/* Main Content */}
          <div className="mb-16 relative">
            <div className="text-center mb-12">
              <p className="text-slate-500 text-base font-light tracking-wide mb-6">This is to certify that</p>
              <h2 className="text-5xl font-light text-slate-800 mb-4 tracking-tight leading-tight">
                {state.employeeName}
              </h2>
              <div className="w-16 h-0.5 bg-slate-300 mx-auto my-6"></div>
            </div>
            
            {/* Certificate Body */}
            <div className="text-slate-700 leading-relaxed text-lg font-light space-y-8 max-w-3xl mx-auto">
              <p>
                has been employed by <span className="font-medium text-slate-900">{state.companyName}</span> as a <span className="font-medium text-slate-900">{state.designation}</span> in the <span className="font-medium text-slate-900">{state.department}</span> department from <span className="font-medium text-slate-900">{formatDate(state.startDate)}</span> to <span className="font-medium text-slate-900">{state.isCurrentlyWorking ? 'Present' : formatDate(state.endDate)}</span>.
              </p>
              
              {state.jobDescription && (
                <div>
                  <p className="text-slate-900 font-medium mb-3">Responsibilities:</p>
                  <p className="pl-6 border-l-2 border-slate-200 text-slate-600 italic font-light">
                    {state.jobDescription}
                  </p>
                </div>
              )}
              
              {state.keyAchievements && state.keyAchievements.trim() !== '' && (
                <div>
                  <p className="text-slate-900 font-medium mb-3">Key Achievements:</p>
                  <ul className="space-y-2 pl-6">
                    {state.keyAchievements
                      .split('\n')
                      .filter((achievement: string) => achievement.trim() !== '')
                      .map((achievement: string, index: number) => (
                        <li key={index} className="text-slate-600 flex items-start">
                          <span className="text-blue-400 mr-3 font-light">•</span>
                          <span className="font-light">{achievement}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
              
              <p className="pt-4">
                {state.employeeName?.split(' ')[0]} has been a valuable contributor to our organization, demonstrating excellence and dedication throughout {state.employmentType === 'Internship' ? 'their' : 'his/her'} tenure.
              </p>
            </div>
          </div>
          
          {/* Signature Section */}
          <div className="mt-20 pt-8 border-t border-slate-200">
            <div className="flex justify-between items-start">
              <div className="text-left pt-8">
                <p className="text-slate-800 font-medium text-base">Vijay</p>
                <p className="text-slate-500 text-sm font-light">Magizh Technologies CEO</p>
              </div>
              
              <div className="text-right pt-8">
                <div className="mb-2">
                  <span className="text-xs text-slate-400 font-light tracking-widest">DATE ISSUED</span>
                </div>
                <p className="text-slate-900 font-light text-sm">{formatDate(state.issueDate)}</p>
              </div>
            </div>
          </div>
          
          {/* Footer Info */}
          <div className="mt-12 pt-8 border-t border-slate-100 text-center text-xs text-slate-400 font-light tracking-wide space-y-1">
            <p>{state.companyName}</p>
            <p>{state.companyAddress} | {state.companyPhone}</p>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={downloadPdf}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center font-light shadow-lg hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewExperienceCertificate;
