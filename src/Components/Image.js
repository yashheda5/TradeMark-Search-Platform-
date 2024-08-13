import React from 'react';
import def from '../Components/Images/default.png';
export const Image = ({ image }) => {
  return (
    <div className="flex-shrink-0">
      <img src={def} alt="Mark"  className="h-32 w-auto" />
    </div>
  );
};
