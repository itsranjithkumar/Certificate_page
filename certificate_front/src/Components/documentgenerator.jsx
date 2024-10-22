import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocumentGenerator() {
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    projectName: '',
    content: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const generateDocument = (e) => {
    e.preventDefault();
    const letterText = `
      <p>Date: <strong>${new Date().toLocaleDateString()}</strong></p>
      <p>Dear <strong>${formData.name}</strong>,</p>
      <p>This letter is to confirm that you have successfully completed the Magizh Technologies
      at our organization from <strong>${formData.startDate}</strong> to <strong>${formData.endDate}</strong>.</p>
      <p>During your internship, you worked on the project "<strong>${formData.projectName}</strong>" and demonstrated
      exceptional skills in automation and software development.</p>
      <p style="white-space: pre-wrap; word-wrap: break-word;">${formData.content}</p>
      <p>We appreciate your hard work and dedication during the internship period and wish you all the best
      in your future endeavors.</p>
      <p>Sincerely,</p>
      <div class="flex flex-col items-center">
        <p class="font-semibold text-center"><strong>Vijay.P</strong></p>
        <p>CEO, MagizhTech</p>
        <img src="/msme.png" alt="Logo" class="my-2" style="max-width: 100px; height: auto;" />
      </div>
    `;
    
    // Navigate to the new page with the letter content
    navigate('/generated-letter', { state: { letterText } }); 
  };

  const handleDownload = () => {
    // Logic for downloading the letter text as a file can be added here
    const letterBlob = new Blob([letterText], { type: 'text/html' });
    const url = URL.createObjectURL(letterBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'internship_letter.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
      {/* Download Button - outside of the letter page */}
    </div>
  );
}
