// src/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; 
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Url } from './url';
import { Navigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Url}/signup`, { name,email, password });
      Cookies.set('token', response.data.token, { expires: 7 });
      Cookies.set('name',response.data.name,{expires:7});
      Cookies.set('userId',response.data.userId,{expires:7});
      alert('user created')
      navigate('/home');
    } catch (err) {
        alert('user already exits')
      setError(err.message);
    }
  };
  //write windows href shift
  const token = Cookies.get('token')
  
  if(token!==undefined){
    return <Navigate to='/home' />
  }


  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="text-center">SignUp</h2>
        {error && <p className="text-center text-danger">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
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
          <button type="submit" className="btn btn-primary btn-block">SignUp</button>
          <p>Have an account <Link to='/'>Login!</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
