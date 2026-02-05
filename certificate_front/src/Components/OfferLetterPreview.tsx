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
          
          {/* Centered Header */}
          <div className="relative">
            {/* Top Yellow Bar */}
            <div className="h-1.5 bg-amber-400" />
            
            {/* Header Content */}
            <div className="px-8 pt-8 pb-6 md:px-12">
              <div className="flex flex-col items-center text-center">
                {/* Logo */}
                <img 
                  src="/logo.png" 
                  alt="Magizh Technologies Logo" 
                  className="h-20 w-auto"
                />
                
                {/* Company Name */}
                <div className="mt-4">
                  <h1 
                    className="text-3xl md:text-4xl font-bold text-gray-800"
                    style={{ 
                      fontFamily: 'Old English Text MT, Times New Roman, serif',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {state.companyName}
                  </h1>
                  <div className="h-0.5 w-16 bg-amber-400 mt-2 mx-auto" />
                </div>
              </div>
            </div>
            
          </div>

          {/* Main Content */}
          <div className="px-12 py-8">
            {/* Date */}
            <p className="text-right text-sm mb-8">Date: {formatDate(state.issueDate)}</p>
            
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-neutral-900 underline underline-offset-4 decoration-2">
                OFFER LETTER
              </h2>
            </div>

            {/* Body Text */}
            <div className="space-y-6 text-neutral-800 leading-relaxed text-justify">
              <p>Dear {state.employeeName || '[Employee Name]'},</p>
              
              <p>
                We are pleased to offer you the position of <span className="font-medium">{state.designation || '[Designation]'}</span> in our <span className="font-medium">{state.department || '[Department]'}</span> department at {state.companyName}.
              </p>
              <p>
                Your annual compensation will be <span className="font-medium">{state.salary ? `Rs. ${parseInt(state.salary).toLocaleString('en-IN')}/-` : '[Salary]'}</span>.
              </p>
              
              <p>
                We are excited about the prospect of you joining our team and look forward to your positive response. Please sign and return a copy of this letter to indicate your acceptance of this offer.
              </p>
              
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="mb-0.5">Sincerely,</p>
                  <div className="h-28 w-52 -ml-2 transform scale-110 origin-left">
                    <img 
                      src="/sig.png" 
                      alt="Authorized Signature" 
                      className="h-full w-full object-contain object-left"
                    />
                  </div>
                  <div className="border-t border-gray-300 w-48 pt-1">
                    <p className="font-medium">{state.companyName}</p>
                  </div>
                </div>
                <div className="w-32 mb-1">
                  <img 
                    src="/msme.png" 
                    alt="MSME Registered" 
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Clean Footer */}
          <div className="border-t border-gray-200 mt-8">
            <div className="h-1 bg-amber-400" />
            
            <div className="px-12 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-gray-800 mb-2">{state.companyName}</p>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p>28, 1st Floor, JK Complex, Above Indian Stores,</p>
                    <p>Mettupalayam Main Road, North Rangasamudram, Sathyamangalam - 638 401</p>
                  </div>
                </div>
                <div className="md:text-right">
                  <div className="flex items-center gap-2 md:justify-end text-gray-600">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>{state.companyPhone}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end text-gray-600 mt-1">
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span>{state.companyEmail}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end text-gray-600 mt-1">
                    <Globe className="w-4 h-4 text-amber-500" />
                    <span>{state.companyWebsite}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} {state.companyName}. All rights reserved.
              </div>
            </div>
            
            <div className="h-1 bg-amber-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferLetterPreview;
