import React from 'react';

export const TrademarkCard = ({ mark, company, number, date, status, statusDate, renewalDate, description, logo, classes }) => {
  const getLogoSrc = (company) => {
    // Placeholder for dynamic logo retrieval logic
    const logos = {
      'Tesla, Inc.': 'path_to_logos/tesla.png',
      'SpaceX Inc.': 'path_to_logos/spacex.png',
      // Add other companies here
    };
    return logos[company] || 'path_to_placeholder.png';
  };

  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <img src={getLogoSrc(company)} alt={company} className="h-10 w-10 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{mark}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-2"><strong>Number:</strong> {number}</p>
      <p className="text-gray-700 mb-2"><strong>Filing Date:</strong> {date}</p>
      <p className="text-gray-700 mb-2"><strong>Status:</strong> {status} (as of {statusDate})</p>
      <p className="text-gray-700 mb-2"><strong>Renewal Date:</strong> {renewalDate}</p>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {description}</p>
      <p className="text-gray-700"><strong>Classes:</strong> {classes.join(', ')}</p>
    </div>
  );
};
