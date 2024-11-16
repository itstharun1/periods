import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home';
import UserForm from './components/UserForm';
import Profile from './components/Profile';
import UpdateData from './components/UpdateData';
import DailyRoutine from './explore/DailyRoutine';
import PeriodCare from './components/Takecare';
import Male from './male/Male';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/userform" element={<UserForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/updatedata" element={<UpdateData />} />
      <Route path="/explore" element={<DailyRoutine />} />
      <Route path="/periodcare" element={<PeriodCare />} />
      <Route path="/male" element={<Male />} />
    </Routes>
  );
}

export default App;
