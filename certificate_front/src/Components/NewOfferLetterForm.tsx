'use client'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ChevronLeft, FileText, Loader2, Briefcase, User, Building2, MapPin, Calendar, DollarSign, Globe, Mail, Phone, CheckCircle } from 'lucide-react'

interface OfferLetterFormData {
  employeeName: string
  designation: string
  department: string
  joiningDate: string
  salary: string
  workLocation: string
  issueDate: string
  companyName: string
  companyAddress: string
  companyWebsite: string
  companyEmail: string
  companyPhone: string
}

const defaultFormData: OfferLetterFormData = {
  employeeName: '',
  designation: '',
  department: '',
  joiningDate: '',
  salary: '',
  workLocation: '',
  issueDate: new Date().toISOString().split('T')[0],
  companyName: 'Magizh Technologies',
  companyAddress: '28,1st Floor, JK Complex, Above Indian Stores, Mettupalayam MainRoad, NorthRangasamudram, Sathyamangalam-638401',
  companyWebsite: 'www.magizhtechnologies.com',
  companyEmail: 'info@magizhtechnologies.com',
  companyPhone: '+91 9342209140',
}

export default function OfferLetterFormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<OfferLetterFormData>(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const loadSampleData = () => {
    setFormData({
      employeeName: 'John Doe',
      designation: 'Senior Software Engineer',
      department: 'Engineering',
      joiningDate: '2024-03-15',
      salary: '1,50,000',
      workLocation: 'Chennai, India',
      issueDate: new Date().toISOString().split('T')[0],
      companyName: 'Magizh Technologies',
      companyAddress: '28,1st Floor, JK Complex, Above Indian Stores, Mettupalayam MainRoad, NorthRangasamudram, Sathyamangalam-638401',
      companyWebsite: 'www.magizhtechnologies.com',
      companyEmail: 'info@magizhtechnologies.com',
      companyPhone: '+91 9342209140',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add a small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.set(key, value);
      });
      navigate(`/preview?${params.toString()}`);
    } catch (error) {
      console.error('Error generating offer letter:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Clean Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-16 sm:pb-24">
        <button 
          onClick={() => window.history.back()}
          className="text-gray-600 hover:text-gray-900 mb-12 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 mb-4">
            Offer Letter
          </h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Create a professional offer letter for your next hire. Fill in the details and generate a polished document.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Employee Information */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Employee Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-4">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Senior Software Engineer"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-4">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Engineering"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-4">Work Location</label>
                <input
                  type="text"
                  name="workLocation"
                  value={formData.workLocation}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="Chennai, India"
                  required
                />
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Employment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-4">Annual Salary (CTC)</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  placeholder="5,00,000"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-4">Issue Date</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-12">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm text-gray-600 mb-4">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-4">Company Website</label>
                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-4">Company Email</label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-4">Company Phone</label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleInputChange}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-600 mb-4">Company Address</label>
                <textarea
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full text-base text-gray-900 border-b border-gray-300 pb-3 focus:border-gray-900 outline-none transition-colors bg-transparent resize-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <button
              type="button"
              onClick={loadSampleData}
              className="px-8 py-3 text-gray-900 font-light hover:bg-gray-100 rounded transition-colors"
            >
              Load Sample
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gray-900 text-white font-light rounded hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating
                </>
              ) : (
                'Generate Letter'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
