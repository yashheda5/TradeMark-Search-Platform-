import React from 'react';
import { TrademarkCard } from './TrademarkCard';

export const Cards = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="space-y-4">
      {data.map((card, index) => (
        <TrademarkCard
          key={index}
          mark={card.mark}
          company={card.company}
          number={card.number}
          date={card.date}
          status={card.status}
          statusDate={card.statusDate}
          renewalDate={card.renewalDate}
          description={card.description}
          logo={card.logo} // Assuming that each card object in data has a logo URL
          classes={card.classes}
        />
      ))}
    </div>
  );
};
