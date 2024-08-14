import React from 'react';

export const Status = ({ status }) => {
  // Define classes based on status
  const getStatusClass = (status) => {
    switch (status) {
      case 'registered':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'abandoned':
        return 'text-red-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <div className={`${getStatusClass(status)} capitalizemax w-[25%] translate-x-[5.5rem] mx-auto items-center justify-center`}>
      {status}
    </div>
  );
};
