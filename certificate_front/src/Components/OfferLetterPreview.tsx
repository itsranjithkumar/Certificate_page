'use client'

import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Mail, Phone, Globe, ArrowLeft } from 'lucide-react';

function OfferLetterPreview() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const state = {
    employeeName: searchParams.get('employeeName') || '',
    designation: searchParams.get('designation') || '',
    department: searchParams.get('department') || '',
    joiningDate: searchParams.get('joiningDate') || '',
    salary: searchParams.get('salary') || '',
    workLocation: searchParams.get('workLocation') || '',
    issueDate: searchParams.get('issueDate') || '',
    companyName: searchParams.get('companyName') || 'Magizh Technologies',
    companyAddress: searchParams.get('companyAddress') || '',
    companyWebsite: searchParams.get('companyWebsite') || '',
    companyEmail: searchParams.get('companyEmail') || '',
    companyPhone: searchParams.get('companyPhone') || '',
  };

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate(-1);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.')
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-8 px-4 md:py-12">
      <div className="mx-auto max-w-3xl">
        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <button
            onClick={handleBack}
            className="px-6 py-2.5 border border-neutral-300 bg-white text-sm font-medium rounded-full hover:bg-neutral-50 transition-colors duration-200 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Edit
          </button>
          <button
            onClick={handlePrint}
            className="px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-black transition-colors duration-200"
          >
            Print
          </button>
        </div>

        {/* Document Container */}
        <div className="bg-white shadow-xl overflow-hidden border border-neutral-200">
          
          {/* Yellow Top Bar */}
          <div className="h-3 bg-amber-400" />
          
          {/* Header with Logo and Company Name */}
          <div className="px-8 pt-6 pb-4 md:px-12 relative">
            {/* Diagonal Yellow Background */}
            <div 
              className="absolute top-0 left-0 w-full h-32 bg-amber-400"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)'
              }}
            />
            
            <div className="relative flex items-center gap-4 mb-2">
              {/* Logo */}
              <div className="w-16 h-16 bg-neutral-900 rounded flex items-center justify-center shrink-0">
                <svg viewBox="0 0 40 40" className="w-12 h-12">
                  <polygon points="20,4 36,32 4,32" fill="#F59E0B" />
                  <polygon points="20,10 30,28 10,28" fill="#1a1a1a" />
                  <circle cx="20" cy="22" r="3" fill="#F59E0B" />
                </svg>
              </div>
              
              {/* Company Name - Gothic Style */}
              <h1 
                className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-wide"
                style={{ 
                  fontFamily: 'Old English Text MT, Times New Roman, serif',
                  textShadow: '1px 1px 0px rgba(0,0,0,0.1)'
                }}
              >
                {state.companyName}
              </h1>
            </div>
            
            {/* Date */}
            <div className="relative text-right mt-8 mb-4">
              <p className="text-neutral-800 font-medium">Date : {formatDate(state.issueDate)}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-8 py-6 md:px-12">
            
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-neutral-900 underline underline-offset-4 decoration-2">
                Offer Letter
              </h2>
            </div>

            {/* Body Text */}
            <div className="space-y-6 text-neutral-800 leading-relaxed">
              <p className="text-justify">
                Dear <span className="font-bold">{state.employeeName}</span>,
              </p>

              <p className="text-justify">
                We are pleased to offer you the position of <span className="font-bold">{state.designation}</span> in 
                the <span className="font-bold">{state.department}</span> department at{' '}
                <span className="font-bold">{state.companyName}</span>. Your skills and experience will be a valuable 
                addition to our team.
              </p>

              <p className="text-justify">
                The terms of your employment are as follows:
              </p>

              <div className="pl-4 space-y-2">
                <p><span className="font-medium">Position:</span> {state.designation}</p>
                <p><span className="font-medium">Department:</span> {state.department}</p>
                <p><span className="font-medium">Date of Joining:</span> {formatDate(state.joiningDate)}</p>
                <p><span className="font-medium">Work Location:</span> {state.workLocation}</p>
                <p><span className="font-medium">Annual CTC:</span> Rs. {state.salary}/-</p>
              </div>

              <p className="text-justify">
                This offer is contingent upon successful completion of background verification and submission of 
                all required documents. Please confirm your acceptance of this offer by signing and returning a 
                copy of this letter.
              </p>

              <p className="text-justify">
                We look forward to welcoming you to our team and wish you a successful career with us.
              </p>

              <div className="pt-6">
                <p className="font-medium">Best Regards,</p>
                <p className="mt-8 font-bold">{state.companyName}</p>
                <p className="text-sm text-neutral-600">HR Department</p>
              </div>
            </div>

            {/* MSME Badge */}
            <div className="flex justify-end mt-8 mb-4">
              <div className="text-right">
                <div className="w-32 h-auto border border-neutral-300 p-2 rounded">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <div className="w-8 h-8 rounded-full border-2 border-amber-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-amber-600">GO</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-bold text-blue-800 leading-tight">MICRO, SMALL & MEDIUM ENTERPRISES</p>
                      <p className="text-[6px] text-neutral-600 leading-tight">सूक्ष्म, लघु एवं मध्यम उद्यम</p>
                    </div>
                  </div>
                  <p className="text-[7px] text-neutral-700 text-center">OUR STRENGTH • हमारी शक्ति</p>
                  <p className="text-[8px] font-semibold text-neutral-800 text-center mt-1">Ministry of MSME, Govt. of India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-2 border-neutral-800 mx-8 md:mx-12" />
          
          <div className="px-8 py-4 md:px-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 text-sm text-neutral-700">
              <div className="space-y-1">
                {state.companyAddress.split(',').map((line, index) => (
                  <p key={index}>{line.trim()}{index < state.companyAddress.split(',').length - 1 ? ',' : ''}</p>
                ))}
                <div className="flex items-center gap-2 pt-1">
                  <Globe className="w-4 h-4 text-neutral-500" />
                  <span>{state.companyWebsite}</span>
                </div>
              </div>
              <div className="space-y-2 md:text-right">
                <div className="flex items-center gap-2 md:justify-end">
                  <Mail className="w-4 h-4 text-neutral-500" />
                  <span>{state.companyEmail}</span>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <Phone className="w-4 h-4 text-neutral-500" />
                  <span>{state.companyPhone}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Yellow Bottom Bar */}
          <div className="h-3 bg-amber-400" />
        </div>
      </div>
    </div>
  )
}

export default OfferLetterPreview;
