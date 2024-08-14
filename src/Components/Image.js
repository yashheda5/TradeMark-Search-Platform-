import React from 'react';
import def from '../Components/Images/default.png';

export const Image = ({ imageId }) => {
  // Construct the URL with the provided imageId or fall back to default image
  const imageUrl = imageId ? `https://static.trademarkia.com/images/${imageId}` : def;

  return (
    <div className="flex-shrink-0 w-[30%]  mx-auto  ">
      <img src={imageUrl} alt="Mark" className="h-32 w-auto" />
    </div>
  );
};
