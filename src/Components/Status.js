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
    <div className={`${getStatusClass(status)} capitalize translate-x-3`}>
      {status}
    </div>
  );
};
