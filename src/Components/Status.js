import React from 'react';

export const Status = ({ status }) => {
  const statusClass = status === 'Registered' ? 'bg-green-600' :
                      status === 'Pending' ? 'bg-yellow-500' :
                      status === 'Abandoned' ? 'bg-red-600' : 'bg-blue-500';

  return (
    <div className={`px-4 py-2 rounded-full text-white ${statusClass}`}>
      {status}
    </div>
  );
};
