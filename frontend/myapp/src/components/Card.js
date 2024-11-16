import React, { useState } from 'react';
import Timeline from './Timeline';
import Countdown from './Countdown';
import './Countdown.css'
import Cookies from 'js-cookie'
import { useEffect } from 'react';
import { Url } from './url';
import { Navigate } from 'react-router-dom';


function Card() {




    const [name,setName]=useState();
    const [lastdate,setLastdate]=useState();

    const date1=Cookies.get('date')
    console.log(`${date1} hello`)

    useEffect(() => {
        // Fetch user data from the backend by sending UserId
       
    
        const pId = Cookies.get('profileId')
        console.log(pId)
        const fetchData = async () => {
          try {
            const response = await fetch(`${Url}/user/${pId}`);
            const result = await response.json();
            console.log(result.profile)
            
            setLastdate(result.profile[0].lastPeriodDate)
            setName(result.profile[0].name)
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        
    
        fetchData();
      }, []);





    const formatDate=(isoString)=> {
        const date = new Date(isoString); 
        const year = date.getFullYear(); 
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 because months are zero-indexed 
        const day = date.getDate().toString().padStart(2, '0'); 
        return `${year}-${month}-${day}`; 
       }
       const formattedDate = formatDate(lastdate);
    
       
       console.log(formattedDate)
    
  const lastPeriodDate = formattedDate; // Example date, replace with actual date
  const cycleLength = 24; // Example cycle length, adjust as needed
  
  const token = Cookies.get('token')
  
  if(token===undefined){
    return <Navigate to='/' />
  }

  return (
    <div>
        <h1>Hello! {name}</h1>
      <h1>Monthly Timeline and Countdown</h1>
      <Timeline lastPeriodDate={lastPeriodDate} />
      <Countdown lastPeriodDate={lastPeriodDate} cycleLength={cycleLength} />
      <p className='para'>"Empower yourself with the strength and grace that comes from taking care of your body. Health is not just about weight loss, it's about self-love, vitality, and living your best life."</p>
    </div>
  );
}

export default Card;
