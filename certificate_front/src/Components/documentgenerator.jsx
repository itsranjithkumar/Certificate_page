import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const generateDocument = (e) => {
    e.preventDefault();

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
            font-size: 12pt;
            line-height: 1.4;
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
            word-wrap: break-word;
          }
          .thank-you {
            text-align: center;
            margin-top: 10px;
            font-size: 14pt;
          }
          .center-logo {
            text-align: center;
            margin-top: 20px;
            margin-left: -30px; /* Move logo slightly more to the left */
          }
          .center-logo img {
            max-width: 110px; /* Increased logo size */
            height: auto; /* Set height to auto to maintain aspect ratio */
            background-color: transparent;
            padding: 0;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)); /* Add shadow to logo */
            object-fit: contain; /* Ensure the logo scales correctly */
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
            font-size: 12pt;
            margin-right: 20px;
          }
          .logo-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .logo-container img {
            max-width: 90px;
            height: auto;
            background-color: transparent;
            padding: 0;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)); /* Add shadow to logo */
            object-fit: contain; /* Ensure the logo scales correctly */
          }
          .contact-info {
            margin-top: 20px;
            border-top: 1px solid black;
            padding-top: 5px;
            display: flex;
            justify-content: space-between;
          }
          .contact-left, .contact-right {
            width: 45%;
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
          p {
            margin: 0 0 5px;
            font-size: 12pt;
          }
        </style>
      </head>
      <body>
        <div class="letter">
          <div class="header">
            <h1 style="font-weight: bold; font-size: 18pt;">Magizh Technologies</h1>
          </div>
          <div class="content">
            <p>
              This document certifies that <strong>${formData.name}</strong> has successfully completed an internship training at our organization in the field of "<strong>${formData.projectName}</strong>." The internship was conducted from <strong>${formData.startDate}</strong> to <strong>${formData.endDate}</strong>, and during this period, <strong>${formData.name}</strong> demonstrated a keen interest in learning new technologies. We are pleased with their excellent performance.
            </p>
            <p>
              We hereby declare that their internship with us is complete.
            </p>
            <p>
              ${formattedContent}
            </p>
            <div class="thank-you">
              <p><strong>Thank You,</strong></p>
            </div>
          </div>
          <div class="footer">
            <div class="signature-section">
              <div class="signature">
                <p>Vijay.P</p>
                <p>CEO, MagizhTech</p>
              </div>
              
              <div class="center-logo">
                <img 
                  src="/Magizh Technologies.png" 
                  alt="Magizh Technologies Logo" 
                  className="w-36 h-36" 
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))', // Adds a subtle shadow around the logo
                    backgroundColor: 'transparent', // Ensure the background is transparent
                  }} 
                />
              </div>
              
              <div class="logo-container">
                <img 
                  src="/msme.png" 
                  alt="MSME Logo" 
                  className="w-36 h-36" 
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))', // Adds a subtle shadow around the logo
                    backgroundColor: 'transparent', // Ensure the background is transparent
                  }} 
                />
              </div>
            </div>
          </div>
          <div class="contact-info">
            <div class="contact-left">
              <p>
                <strong>28,1st Floor, JK Complex,
<br>Above Old Indian Stores,</strong><br />
                <strong>Sathyamangalam-638401</strong><br />
              </p>
            </div>
            <div class="contact-right">
              <p><strong>info@magizhtechnologies.com</strong></p>
              <p class="address-space"><strong>www.magizhtechnologies.com</strong></p>
              <p><strong>+91 9342209140</strong></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    navigate('/generated-letter', { state: { letterText } });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ fontSize: '1.25rem' }}>Document Generator</CardTitle>
        <CardDescription style={{ fontSize: '1.1rem' }}>
          Fill out the details to generate your internship certificate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={generateDocument}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" style={{ fontSize: '1rem' }}>Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" style={{ fontSize: '1rem', padding: '8px' }} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="startDate" style={{ fontSize: '1rem' }}>Start Date</Label>
              <Input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleInputChange} style={{ fontSize: '1rem', padding: '8px' }} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="endDate" style={{ fontSize: '1rem' }}>End Date</Label>
              <Input id="endDate" name="endDate" type="date" value={formData.endDate} onChange={handleInputChange} style={{ fontSize: '1rem', padding: '8px' }} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="projectName" style={{ fontSize: '1rem' }}>Project Name</Label>
              <Input id="projectName" name="projectName" value={formData.projectName} onChange={handleInputChange} placeholder="Project Name" style={{ fontSize: '1rem', padding: '8px' }} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="content" style={{ fontSize: '1rem' }}>Content</Label>
              <Textarea id="content" name="content" value={formData.content} onChange={handleInputChange} placeholder="Additional Content" style={{ fontSize: '1rem', padding: '8px' }} />
            </div>
          </div>
          <Button type="submit" className="mt-4">Generate Document</Button>
        </form>
      </CardContent>
    </Card>
  );
}
