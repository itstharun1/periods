import React, { useState } from 'react';
import './UserForm.css';
import { Url } from './url';
import Cookies from 'js-cookie'
import { useNavigate,Navigate } from 'react-router-dom';

function UserForm() {
  const navigate = useNavigate();

  const profileId = Cookies.get('userId')


  const [formData, setFormData] = useState({
    name: '',
    height: '',
    weight: '',
    lastPeriodDate: '',
    profileId:profileId,
    photo: null,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch(`${Url}/userform`, {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      Cookies.set('profileId',result.profile._id,{expires:7});
      navigate('/profile');
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  const token = Cookies.get('token')
  
  if(token===undefined){
    return <Navigate to='/' />
  }


  return (
    <div className="form-container">
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter your height"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter your weight"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastPeriodDate">Last Period Date</label>
          <input
            type="date"
            id="lastPeriodDate"
            name="lastPeriodDate"
            value={formData.lastPeriodDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
