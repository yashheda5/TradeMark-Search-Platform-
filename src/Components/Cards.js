import React from 'react';
import { Card } from './Card';

export const Cards = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className='rounded-lg shadow-[0px_10px_20px_rgba(0,0,0,0.3)] translate-x-5 '>
      <div className='flex text-xl justify-between px-[6rem] pt-[5rem] pb-[1.5rem] font-semibold border-b-[0.35rem] '>
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
