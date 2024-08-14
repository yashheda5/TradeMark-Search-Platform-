import React from 'react';
import { Image } from './Image';
import { Details } from './Details';
import { Status } from './Status';
import { Description } from './Description';

export const Card = ({ item }) => {
    // Ensure mark_description exists and has a 'description' property.
    const markDescription = item._source?.mark_description_description || ['No description available'];
    const description = markDescription.join(' ');
  
    return (
      <div className='flex w-[100%] justify-between px-[6rem] pt-[2rem] pb-[1.5rem] translate-x-[-3rem]'>
        <Image image={item} />
        <Details details={item._source} />
        <Status status={item._source.status_type} />
        <Description description={description} />
      </div>
    );
  };
  
