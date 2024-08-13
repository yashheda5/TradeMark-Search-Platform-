import React from 'react';

export const Image = ({ image }) => {
  return (
    <div className="flex-shrink-0">
      <img src={image} alt="Mark" className="h-32 w-auto" />
    </div>
  );
};
