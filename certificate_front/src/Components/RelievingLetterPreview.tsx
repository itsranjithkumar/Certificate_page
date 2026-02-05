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
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Toolbar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-300 shadow-sm print:hidden">
        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">
              Relieving Letter Preview
            </h1>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <Button
              onClick={handlePrint}
              className="bg-gray-700 hover:bg-gray-800 text-white flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Print
            </Button>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </Button>
          </div>
        </div>
      </div>

      {/* Document Container */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <div
          ref={printRef}
          className="bg-white p-20 border-2 border-black shadow-lg"
          style={{
            fontFamily: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
            lineHeight: '1.8',
            color: '#1a1a1a',
          }}
        >
          {/* Company Header with Logo */}
          <div className="mb-12 pb-8 border-b-2 border-black text-center">
            <div className="flex flex-col items-center">
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="h-20 w-auto mb-4"
                onError={(e) => {
                  // Hide the image if it fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {data.companyName}
              </h1>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {data.companyAddress}
              </p>
            </div>
          </div>

          {/* Large Vertical Space */}
          <div className="h-6" />

          {/* Date */}
          <div className="mb-8">
            <p className="text-sm text-gray-900">
              <span className="font-semibold">Date:</span> {formatDate(data.letterDate)}
            </p>
          </div>

          {/* Salutation */}
          <div className="mb-8">
            <p className="text-sm text-gray-900">Dear Concerned,</p>
          </div>

          {/* Main Letter Body - Clean and Left-aligned */}
          <div className="space-y-6 text-gray-900 leading-8">
            <p className="text-sm">
              This is to certify that <span className="font-semibold">{data.companyName}</span> hereby
              confirms that{' '}
              <span className="font-semibold">{data.employeeName}</span> with Employee ID{' '}
              <span className="font-semibold">{data.employeeId}</span> has been employed as a{' '}
              <span className="font-semibold">{data.designation}</span> in the{' '}
              <span className="font-semibold">{data.department}</span> Department with our organization
              from <span className="font-semibold">{formatDate(data.startDate)}</span> to{' '}
              <span className="font-semibold">{formatDate(data.endDate)}</span>.
            </p>

            <p className="text-sm">
              During his/her tenure with us, {data.employeeName} has worked on several key projects
              of the company and has consistently delivered excellence. He/She has been punctual and
              regular in his/her duties and has maintained an excellent professional reputation among
              team members and clients alike. {data.employeeName} is a dedicated team player who has
              contributed significantly to the growth and success of our organization.
            </p>

            {data.reasonForRelief && (
              <p className="text-sm">
                <span className="font-semibold">Reason for Relief:</span> {data.reasonForRelief}
              </p>
            )}

            <p className="text-sm">
              We hereby relieve <span className="font-semibold">{data.employeeName}</span> of all
              responsibilities and duties with immediate effect. This letter is issued for the
              purpose of his/her future employment or any other official use as required. We wish
              him/her all the best in his/her future endeavors.
            </p>
          </div>

          {/* Large Vertical Space */}
          <div className="h-10" />

          {/* Closing */}
          <div className="text-sm text-gray-900">
            <p className="mb-12">Regards,</p>

            {/* Signature Space */}
            <div className="w-40">
              <div className="border-b-2 border-gray-900 mb-2 h-16" />
              <p className="font-semibold">{data.companyCEO}</p>
              <p className="text-xs text-gray-600 mt-1">Authorized Signatory</p>
              <p className="text-xs text-gray-600 mt-1">{data.companyName}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-black text-center">
            <p className="text-xs text-gray-500">
              This is a computer-generated document and is valid without signature.
            </p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white;
            margin: 0;
            padding: 0;
          }
          .print\\:hidden {
            display: none !important;
          }
          .sticky {
            position: static;
          }
          .shadow-lg {
            box-shadow: none !important;
          }
          .bg-gray-100 {
            background: white !important;
          }
        }
        @page {
          margin: 0;
          size: A4;
        }
      `}</style>
    </div>
  )
}
