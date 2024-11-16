import React, { useEffect, useState } from 'react';
import { Link , Navigate} from 'react-router-dom';
import Cookies from 'js-cookie'

const calculateNextPeriodDate = (lastPeriodDate, cycleLength = 28) => {
  const lastPeriod = new Date(lastPeriodDate);
  const nextPeriod = new Date(lastPeriod);
  nextPeriod.setDate(lastPeriod.getDate() + cycleLength);
  return nextPeriod;
};

const Countdown = ({ lastPeriodDate, cycleLength }) => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const now = new Date();
      const nextPeriodDate = calculateNextPeriodDate(lastPeriodDate, cycleLength);
      const timeDiff = nextPeriodDate - now;
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    // Calculate days left initially and set interval for real-time updates
    calculateDaysLeft();
    const intervalId = setInterval(calculateDaysLeft, 1000 * 60); // Update every minute

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [lastPeriodDate, cycleLength]);
  const val=(daysLeft<=2)||(daysLeft >=22)

  
  const token = Cookies.get('token')
  
  if(token===undefined){
    return <Navigate to='/' />
  }

  return (
    <div className="countdown-container">
      <h2>Next Period Countdown</h2>
      <p>{daysLeft > 0 ? `${daysLeft} days left` : 'Today is the day!'}</p>
      <Link to='/explore' >
          <button className="toggle-button t">Explore</button>
      </Link>
      {val && <Link to="/periodcare" ><button className='toggle-button'>Take Care</button></Link>}
    </div>
  );
};

export default Countdown;
