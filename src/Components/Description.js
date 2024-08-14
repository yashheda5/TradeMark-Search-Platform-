import React, { useState } from 'react';

export const Description = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define the maximum length for truncated text
  const maxLength = 200;

  // Function to toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  // Convert the description to lowercase
  const lowerCaseDescription = description.toLowerCase();

  // Truncate the description if it's too long
  const truncatedDescription = lowerCaseDescription.length > maxLength
    ? lowerCaseDescription.slice(0, maxLength) + '...'
    : lowerCaseDescription;

  return (
    <div className='w-[40%] translate-x-[9rem] mx-auto'>
      <p>
        {isExpanded ? lowerCaseDescription : truncatedDescription}
        {lowerCaseDescription.length > maxLength && (
          <span 
            onClick={toggleExpand} 
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            {isExpanded ? ' Read less' : ' Read more'}
          </span>
        )}
      </p>
    </div>
  );
};
