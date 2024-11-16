import React from 'react';
import RoutineForm from './RoutineForm';
import './Maincard.css'
import { Url } from './url1';
import { useState } from 'react';
import Cardimg from './Cardimg';
import VideoGallery from './Videos';

function DailyRoutine() {
  const [routine, setRoutine] = useState(true);



  const handleRoutineSubmit = async (data) => {
    try {
      const response = await fetch(`${Url}/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error setting routine:', error);
    }
  };
  const btn1=()=>{
    setRoutine(false)
  }
  const btn2=()=>{
    setRoutine(true)
  }

  return (
    <div className='main-card'>
        <div>
           <p>Daily Routine Subscription</p>
           <RoutineForm onSubmit={handleRoutineSubmit} />
       </div>
    <div className='card2'>
        <div className='btns'>
            <button onClick={btn1}>Yoga Videos</button>
            <button onClick={btn2}>Yoga Poses</button>
        </div>
        <div>
          {routine? <div><Cardimg/></div>:<div><VideoGallery/></div>}
        </div>
    </div>
    </div>
  );
}

export default DailyRoutine;
