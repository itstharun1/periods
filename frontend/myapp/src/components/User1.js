import React, { useState, useEffect } from 'react';
import './User.css';
import { Url } from './url';
import Cookies from 'js-cookie';

function User1() {
  const [userData, setUserData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  
  
  

  useEffect(() => {
    // Fetch user data from the backend by sending UserId
   

    const pId = Cookies.get('profileId')
    console.log(pId)
    const fetchData = async () => {
      try {
        const response = await fetch(`${Url}/user/${pId}`);
        const result = await response.json();
        console.log(result.profile)
        setUserData(result.profile[0]); // Assuming there's at least one user
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    

    fetchData();
  }, []);

  const handleToggle = () => {
    setShowDetails(!showDetails);
    console.log(userData)
  };

  

  
  



  return (
    <div className="profile-container">
      {userData ? (
        <div className="profile-card">
          <img src={`${Url}/${userData.photo}`} alt="User Profile" className="profile-photo" />
          <h2>{userData.name}</h2>
          <button onClick={handleToggle} className="toggle-button">
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          {showDetails && (
            <div className="profile-details">
              <p><strong>Height:</strong> {userData.height} cm</p>
              <p><strong>Weight:</strong> {userData.weight} kg</p>
              <p><strong>Last Period Date:</strong> {new Date(userData.lastPeriodDate).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default User1;
