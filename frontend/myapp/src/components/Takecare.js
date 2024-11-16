import React from 'react';
import './PeriodCare.css';
import { Link,Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const PeriodCare = () => {
  
  const token = Cookies.get('token')
  
  if(token===undefined){
    return <Navigate to='/' />
  }

  return (
    <div className="period-care tharun">
      <h1>Period Care Tips</h1>
      <p>During your period, it's important to take extra care of your body. Here are some tips to help you manage pain and stay comfortable:</p>
      <ul>
        <li><strong>Stay Hydrated:</strong> Drink plenty of water to help reduce bloating and pain.</li>
        <li><strong>Eat Nutritious Foods:</strong> Consume a balanced diet rich in fruits, vegetables, and whole grains.</li>
        <li><strong>Practice Yoga:</strong> Gentle yoga poses like Child's Pose and Cat-Cow can help alleviate pain.</li>
        <li><strong>Use Heat Therapy:</strong> Apply a warm compress to your lower abdomen to ease cramps.</li>
        <li><strong>Get Plenty of Rest:</strong> Ensure you get enough sleep to help your body recover.</li>
        <li><strong>Stay Active:</strong> Light exercises like walking or stretching can reduce pain and improve mood.</li>
        <li><strong>Take Pain Relievers:</strong> Over-the-counter pain relievers can help manage severe cramps.</li>
        <li><strong>Avoid Caffeine and Alcohol:</strong> These can worsen cramps and bloating.</li>
      </ul>
      <Link to='/explore' >
          <button className="toggle-button t">Explore</button>
      </Link>
    </div>
  );
};

export default PeriodCare;
