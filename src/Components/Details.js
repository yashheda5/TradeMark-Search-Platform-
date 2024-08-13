import React from 'react';
import { format, parse } from 'date-fns';
import { enGB } from 'date-fns/locale';

// Function to format the day with ordinal suffix
const formatDayWithOrdinal = (date) => {
  const day = format(date, 'd');
  const suffix = ['th', 'st', 'nd', 'rd'][
    (day % 10 > 3 || Math.floor(day / 10) === 1) ? 0 : day % 10
  ];
  return `${day}${suffix}`;
};

export const Details = ({ details }) => {
  // Convert Unix timestamp to a Date object
  const registrationDate = new Date(details.registration_date * 1000);
  
  // Format the date as "20th January 2020"
  const formattedDate = `${formatDayWithOrdinal(registrationDate)} ${format(registrationDate, 'MMMM yyyy', { locale: enGB })}`;

  return (
    <div className='flex flex-col gap-7 translate-x-[-1rem] max-w-[8rem]'>
      <div className='font-semibold'>{details.current_owner}</div>
      <div>{details.registration_number}</div>
      <div>{formattedDate}</div>
    </div>
  );
};
