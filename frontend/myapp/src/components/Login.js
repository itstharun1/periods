// src/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; 
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Url } from './url';
import { Navigate } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Url}/login`, { email, password });
      Cookies.set('token', response.data.token, { expires: 7 });
      alert('login sucess') 
      navigate('/home');
    } catch (err) {
        alert('details didnt match')
      setError('Invalid email or password');
    }
  };
  const token = Cookies.get('token')
  
  if(token!==undefined){
    return <Navigate to='/home' />
  }
  

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="text-center">Login</h2>
        {error && <p className="text-center text-danger">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <p>Dont have an account <Link to='/signup'>Create it!</Link></p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
