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
            margin: 20mm;
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 10pt;
            line-height: 1.2; /* Reduced line-height to minimize space between lines */
            margin: 0;
            padding: 0;
          }
          .letter {
            width: 100%;
            text-align: left;
          }
          .header, .footer {
            text-align: center;
            margin-bottom: 10px;
          }
          .content {
            margin-top: 10px;
            margin-bottom: 10px;
            text-align: justify;
            word-wrap: break-word;  /* Break long words */
          }
          .thank-you {
            text-align: center;
            margin-top: 10px;
          }
          .signature-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
          }
          .signature {
            text-align: left;
            font-weight: bold;
          }
          .logo-container {
            text-align: center;
          }
          .logo-container img {
            max-width: 100px;
            height: auto;
          }
          .contact-info {
            margin-top: 20px;
            border-top: 1px solid black;
            padding-top: 5px;
            display: flex; /* Change to flex for better alignment */
            justify-content: space-between; /* Align items across */
          }
          .contact-left, .contact-right {
            width: 45%; /* Adjust width to make them fit well */
          }
          .contact-left {
            text-align: left;
          }
          .contact-right {
            text-align: right;
          }
          .address-space {
            margin-bottom: 5px;
          }
          /* Reducing margin around paragraphs */
          p {
            margin: 0 0 5px; /* Set margin to 0 and reduce bottom spacing to 5px */
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
              ${formattedContent} <!-- Additional content will automatically wrap and go to next line -->
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
                <img src="/Magizh Technologies.png" alt="Magizh Technologies Logo" />
              </div>
              <div class="logo-container">
                <img src="/msme.png" alt="MSME Logo" />
              </div>
            </div>
          </div>
          <div class="contact-info">
            <div class="contact-left">
              <p>
                North Rangasamudram, Sathyamangalam-638401<br />
              </p>
              <p class="address-space">www.magizhtechnologies.com</p>
            </div>
            <div class="contact-right">
              <p>info@magizhtechnologies.com</p>
              <p>+91 9342209140</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Navigate to a new page with the generated letter content
    navigate('/generated-letter', { state: { letterText } });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Generator</CardTitle>
        <CardDescription>
          Fill out the details to generate your internship certificate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={generateDocument}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" name="endDate" type="date" value={formData.endDate} onChange={handleInputChange} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" name="projectName" value={formData.projectName} onChange={handleInputChange} placeholder="Project Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="content">Additional Content</Label>
              <Textarea id="content" name="content" value={formData.content} onChange={handleInputChange} placeholder="Additional content for the certificate" />
            </div>
          </div>
          <Button className="mt-4" type="submit">Generate Document</Button>
        </form>
      </CardContent>
    </Card>
  );
}
