'use client'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const [formData, setFormData] = useState<OfferLetterFormData>(defaultFormData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    Object.entries(formData).forEach(([key, value]) => {
      params.set(key, value)
    })
    navigate(`/preview?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light text-neutral-900 mb-2">Create Offer Letter</h1>
          <p className="text-neutral-500 text-base font-light">Fill in the details below to generate a professional offer letter</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Employee Information Section */}
          <div className="border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-medium text-neutral-900 mb-6">Employee Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="e.g., John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="e.g., Software Developer"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="e.g., Engineering"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Work Location</label>
                <input
                  type="text"
                  name="workLocation"
                  value={formData.workLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="e.g., Coimbatore"
                  required
                />
              </div>
            </div>
          </div>

          {/* Employment Details Section */}
          <div className="border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-medium text-neutral-900 mb-6">Employment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Annual Salary (CTC)</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  placeholder="e.g., 5,00,000"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Issue Date</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div className="border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-medium text-neutral-900 mb-6">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Company Website</label>
                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Company Email</label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Company Phone</label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-700 mb-1">Company Address</label>
                <textarea
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-neutral-200 pt-8 flex justify-end gap-3">
            <button
              type="submit"
              className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-black transition-colors duration-200"
            >
              Preview Offer Letter
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
