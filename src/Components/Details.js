import React from 'react';

export const Details = ({ details }) => {
  return (
    <div>
      <div>{details.current_owner}</div>
      <div>{details.registration_number}</div>
      <div>{details.registration_date}</div>
    </div>
  );
};
