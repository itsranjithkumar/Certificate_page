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

    // Replace newlines with <br /> in the content
    const formattedContent = formData.content.replace(/\n/g, '<br />');

    const letterText = `
      <html>
      <head>
        <style>
          @page {
            size: A4;
            margin: 40mm 20mm; /* Top and bottom margins for the letter */
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 12pt;
            line-height: 1.6; /* Increased line height for better readability */
            margin: 0;
            padding: 0;
          }
          .letter {
            width: 100%;
            max-width: 100%;
            text-align: left;
          }
          .header, .footer {
            text-align: center;
            margin-bottom: 20px;
          }
          .content {
            margin-top: 20px;
            margin-bottom: 20px; /* Add space below content */
            text-align: justify;
            max-height: 300px; /* Limit the height of the content area */
            overflow-y: auto; /* Enable scrolling if content exceeds the height */
          }
          .thank-you {
            text-align: center;
            margin-top: 20px;
          }
          .signature-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
          }
          .signature {
            text-align: left; /* Align signature to the left */
            font-weight: bold;
          }
          .logo-container img {
            max-width: 100px;
            height: auto;
            text-align: right; /* Align logo to the right */
          }
          .contact-info {
            margin-top: 30px; /* Space above contact info */
            border-top: 1px solid black; /* Black line */
            padding-top: 10px; /* Space above the contact details */
          }
          .contact-left {
            float: left;
            width: 50%; /* Left side */
            text-align: left;
          }
          .contact-right {
            float: right;
            width: 50%; /* Right side */
            text-align: right;
          }
          .clearfix {
            clear: both; /* Clear floats */
          }
          .address-space {
            margin-bottom: 10px; /* Space below address before the link */
          }
        </style>
      </head>
      <body>
        <div class="letter">
          <div class="header">
            <h1 style="font-weight: bold;">Magizh Technologies</h1>
          </div>
          <div class="content">
            <p>
              This is to certify that <strong>${formData.name}</strong> has successfully completed an internship training at our organization in the field of "<strong>${formData.projectName}</strong>." The internship was conducted from <strong>${formData.startDate}</strong> to <strong>${formData.endDate}</strong>, and during this period, <strong>${formData.name}</strong> demonstrated a keen interest in learning new technologies. We are pleased with their excellent performance.
            </p>
            <p>
              We hereby declare that their internship with us is complete.
            </p>
            <p>
              ${formattedContent} <!-- Additional content added here -->
            </p>
            <div class="thank-you">
              <p>Thank You.</p>
            </div>
          </div>
          <div class="footer">
            <div class="signature-section">
              <div class="signature">
                <p>Vijay.P</p>
                <p>CEO, MagizhTech</p>
              </div>
              <div class="logo-container">
                <img src="/msme.png" alt="Logo" />
              </div>
            </div>
          </div>
          <div class="contact-info">
            <div class="contact-left">
              <p>
                28, 1st Floor, JK Complex,<br />
                
                North Rangasamudram, Sathyamangalam-638401<br />
              </p>
              <p class="address-space">www.magizhtechnologies.com</p>
            </div>
            <div class="contact-right">
              <p>info@magizhtechnologies.com</p>
              <p>+91 9342209140</p>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Navigate to the new page with the letter content
    navigate('/generated-letter', { state: { letterText } });
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
    </div>
  );
}
