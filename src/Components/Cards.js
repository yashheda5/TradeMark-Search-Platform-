import React from 'react';
import { Card } from './Card';

export const Cards = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className='rounded-lg shadow-2xl translate-x-4 '>
      <div className='flex w-[4/5] justify-between px-[7rem] pt-[5rem] pb-[1.5rem] font-semibold border-b-2'>
        <div>Mark</div>
        <div>Details</div>
        <div>Status</div>
        <div>Class/Description</div>
      </div>
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};
