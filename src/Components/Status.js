import React from 'react';

export const Status = ({ status }) => {
  // const statusClass = status === 'Registered' ? 'bg-green-600' :
  //                     status === 'Pending' ? 'bg-yellow-500' :
  //                     status === 'Abandoned' ? 'bg-red-600' : 'bg-blue-500';

  return (
    <div className={`px-4 py-2 rounded-full text-black m-2 translate-x-[-2rem] capitalize max-w-[1rem]`}>
      {status}
    </div>
  );
};
