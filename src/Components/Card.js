import React from 'react';
import { Image } from './Image';
import { Details } from './Details';
import { Status } from './Status';
import { Description } from './Description';

export const Card = ({ item }) => {
    // Ensure mark_description exists and has a 'description' property.
    const markDescription = item._source?.mark_description_description || ['No description available'];
    const description = markDescription.join(' ');

    // Ensure _source exists and has the required properties
    const { status_type } = item._source || 'Unknown Status';

    return (
      <div className='flex w-[100%] justify-between px-[6rem] pt-[2rem] pb-[1.7rem] translate-x-[-6rem]'>
        <Image imageId={item._id} />
        <Details details={item._source} />
        <Status status={status_type} />
        <Description description={description} />
      </div>
    );
};
