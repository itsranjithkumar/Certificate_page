'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import html2pdf from 'html2pdf.js';

export default function DocumentGenerator() {
  const [document, setDocument] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    projectName: '',
    content: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const generateDocument = (e) => {
    e.preventDefault();
    const letterText = `
      <div id="letter-content" class="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-8 border border-gray-300">
        <div class="mb-8 text-center">
          <img src="/logo.png" alt="Logo" class="mx-auto mb-4" style="max-width: 100px; height: auto;" />
          <p class="text-lg font-semibold">Automation Internship Program</p>
          <p>123 Tech Street, Silicon Valley, CA 94000</p>
        </div>
        <p class="mb-4">Date: <strong>${new Date().toLocaleDateString()}</strong></p>
        <p class="mb-4">Dear <strong>${formData.name}</strong>,</p>
        <p class="mb-4">
          This letter is to confirm that you have successfully completed the Automation Internship Program
          at our organization from <strong>${formData.startDate}</strong> to <strong>${formData.endDate}</strong>.
        </p>
        <p class="mb-4">
          During your internship, you worked on the project "<strong>${formData.projectName}</strong>" and demonstrated
          exceptional skills in automation and software development.
        </p>
        <p class="mb-4" style="white-space: pre-wrap; word-wrap: break-word;">${formData.content}</p>
        <p class="mb-4">
          We appreciate your hard work and dedication during the internship period and wish you all the best
          in your future endeavors.
        </p>
        <p class="mb-8">Sincerely,</p>
        <div>
          <p class="font-semibold"><strong>Vijay.P</strong></p>
          <p>CEO, MagizhTech</p>
        </div>
      </div>
    `;
    setDocument(letterText);
  };

  const handleDownload = () => {
    const element = document.getElementById('letter-content');
    if (element) {
      const opt = {
        margin:       0.5,
        filename:     'Internship_Letter.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().from(element).set(opt).save();
    } else {
      console.error("Letter content not found!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle>Internship Document Generator</CardTitle>
          <CardDescription>Fill in the details to generate a letter</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={generateDocument} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" name="startDate" type="date" required value={formData.startDate} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" name="endDate" type="date" required value={formData.endDate} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" name="projectName" required value={formData.projectName} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Additional Content</Label>
              <Textarea 
                id="content" 
                name="content" 
                placeholder="Enter additional content for the letter..."
                value={formData.content} 
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit" className="w-full">Generate Letter</Button>
          </form>
        </CardContent>
      </Card>

      {document && (
        <div className="mt-8">
          <div id="letter-content" dangerouslySetInnerHTML={{ __html: document }} />
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
          >
            Download Certificate
          </button>
        </div>
      )}
    </div>
  );
}
