import React, { useEffect, useState } from 'react';
import './Timeline.css';

const Timeline = ({ lastPeriodDate }) => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const dateArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      dateArray.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }

    setDates(dateArray);
  }, []);

  const isCurrentDate = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isLastPeriodDate = (date) => {
    const lastPeriod = new Date(lastPeriodDate);
    return date.toDateString() === lastPeriod.toDateString();
  };

  return (
    <div className="timeline-container">
      {dates.map((date, index) => (
        <div
          key={index}
          className={`date-circle ${isCurrentDate(date) ? 'current-date' : ''} ${isLastPeriodDate(date) ? 'last-period-date' : ''}`}
        >
          {date.getDate()}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
