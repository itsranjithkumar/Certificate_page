import React from 'react';

const InternshipCertificate = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Internship Completion Certificate</h1>
      <div className="overflow-hidden rounded-lg shadow-lg"> {/* Container for scaling effect */}
        <img
          src="/2.png" // Directly use the path to the image in the public folder
          alt="Internship Completion Certificate"
          className="max-w-lg h-auto transform scale-105 transition-transform duration-300 ease-in-out" // Slightly larger size and scaling
          style={{ maxHeight: '80vh' }} // Limit height to 80% of the viewport height
        />
      </div>
    </div>
  );
};

export default InternshipCertificate;
