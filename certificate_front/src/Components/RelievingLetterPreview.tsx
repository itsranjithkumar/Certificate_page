'use client'

import { Button } from '@/components/ui/button'
import { Download, Edit2, FileText, ArrowLeft } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import React, { useRef } from 'react'

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

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

export function RelievingLetterPreview() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const printRef = useRef<HTMLDivElement>(null)

  const data: RelievingLetterData = JSON.parse(
    decodeURIComponent(searchParams.get('data') || '{}')
  )

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = async () => {
    const element = printRef.current
    if (!element) return

    try {
      const html2pdf = (await import('html2pdf.js')).default
      const opt = {
        margin: 10,
        filename: `${data.employeeName}-Relieving-Letter.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      }
      html2pdf().set(opt).from(element).save()
    } catch (error) {
      window.print()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <div className="fixed top-8 right-8 z-10">
        <Button
          onClick={handleDownload}
          className="bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2 font-light rounded"
        >
          <Download className="h-4 w-4" />
          Download
        </Button>
      </div>

      {/* Document Container */}
      <div className="max-w-2xl mx-auto">
        <div
          ref={printRef}
          className="bg-white p-16 shadow-sm relative"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
            lineHeight: '1.7',
            color: '#000',
            width: '210mm',
            minHeight: '297mm',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Company Header - Centered */}
          <div className="text-center mb-12 pb-8 border-b border-gray-200">
            <img 
              src="/logo.png"
              alt="Company Logo" 
              className="h-20 w-auto mx-auto mb-6"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            <h1 className="text-3xl font-normal text-gray-900 mb-3 tracking-tight">
              {data.companyName}
            </h1>
            <p className="text-base text-gray-600 font-light whitespace-pre-line">
              {data.companyAddress}
            </p>
          </div>

          {/* Date */}
          <div className="mb-12 text-right">
            <p className="text-sm text-gray-700 font-light">
              {formatDate(data.letterDate)}
            </p>
          </div>

          {/* Salutation */}
          <div className="mb-10">
            <p className="text-sm text-gray-900 font-light">Dear Concerned,</p>
          </div>

          {/* Main Letter Body */}
          <div className="space-y-6 text-gray-900 font-light text-justify">
            <p className="text-sm leading-relaxed">
              This is to certify that {data.companyName} hereby confirms that {data.employeeName} with Employee ID {data.employeeId} has been employed as a {data.designation} in the {data.department} Department with our organization from {formatDate(data.startDate)} to {formatDate(data.endDate)}.
            </p>

            <p className="text-sm leading-relaxed">
              During his/her tenure with us, {data.employeeName} has worked on several key projects of the company and has consistently delivered excellence. He/She has been punctual and regular in his/her duties and has maintained an excellent professional reputation among team members and clients alike. {data.employeeName} is a dedicated team player who has contributed significantly to the growth and success of our organization.
            </p>

            {data.reasonForRelief && (
              <p className="text-sm leading-relaxed">
                Reason for Relief: {data.reasonForRelief.replace(/<[^>]*>?/gm, '')}
              </p>
            )}

            <p className="text-sm leading-relaxed">
              We hereby relieve {data.employeeName} of all responsibilities and duties with immediate effect. This letter is issued for the purpose of his/her future employment or any other official use as required. We wish him/her all the best in his/her future endeavors.
            </p>
          </div>

          {/* Closing Section */}
          <div className="mt-20 pt-16">
            <p className="text-sm text-gray-900 font-light mb-16">Regards,</p>

            {/* Signature Space */}
            <div>
              <div className="border-b border-gray-400 mb-2 h-16 w-48" />
              <p className="text-sm text-gray-900 font-light mt-1">{data.companyCEO}</p>
              <p className="text-xs text-gray-600 font-light mt-1">Authorized Signatory</p>
              <p className="text-xs text-gray-600 font-light mt-1">{data.companyName}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          * {
            margin: 0 !important;
            padding: 0 !important;
          }
          body {
            background: white;
            margin: 0;
            padding: 0;
          }
          .fixed {
            display: none !important;
          }
          .shadow-sm {
            box-shadow: none !important;
          }
          .bg-gray-50 {
            background: white !important;
          }
        }
        @page {
          size: A4;
          margin: 0;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  )
}
