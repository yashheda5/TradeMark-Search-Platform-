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
      <div className='flex w-[100%] justify-between px-[7rem] pt-[2rem] pb-[1.5rem] translate-x-[-3rem]'>
        <Image image={item.source.mark_identification} />
        <Details details={item.source} />
        <Status status={item.source.status_type} />
        <Description description={description} />
      </div>
    );
  };
  
