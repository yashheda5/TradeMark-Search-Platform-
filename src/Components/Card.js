import React from 'react';
import { Image } from './Image';
import { Details } from './Details';
import { Status } from './Status';
import { Description } from './Description';

export const Card = ({ item }) => {
    // Ensure mark_description exists and has a 'description' property.
    const markDescription = item.source?.mark_description?.description || ['No description available'];
    const description = markDescription.join(' ');
  
    return (
      <div className='flex w-[4/5] justify-between px-[3.7rem] pt-[1.5rem] pb-[1.5rem] font-semibold'>
        <Image image={item.source.mark_identification} />
        <Details details={item.source} />
        <Status status={item.source.status_type} />
        <Description description={description} />
      </div>
    );
  };
  
