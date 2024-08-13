import React, { useState } from 'react';

export const Description = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define the maximum length for truncated text
  const maxLength = 200;
  
  // Function to toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  // Truncate the description if it's too long
  const truncatedDescription = description.length > maxLength
    ? description.slice(0, maxLength) + '...'
    : description;

  return (
    <div className=' max-w-[12vw] translate-x-[6rem]'>
      <p>
        {isExpanded ? description : truncatedDescription}
        {description.length > maxLength && (
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
