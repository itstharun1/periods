import React, { useState } from 'react';
import './UpdateData.css';
import { Url } from './url';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';



function UpdateData() {
    const profileId = Cookies.get('userId')
    const id=Cookies.get('profileId')
    const navigate = useNavigate();


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
      const response = await fetch(`${Url}/user/${id}`, {
        method: 'PUT',
        body: data,
      });
      const result = await response.json();

      console.log(result);
      navigate('/profile')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Update User Information</h2>
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
          <label htmlFor="photo">Upload New Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn-submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateData;
