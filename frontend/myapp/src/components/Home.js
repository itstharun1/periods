import React from 'react'
import female from '../images/female.png'
import male from '../images/male.png'
import './home.css'
import { Link,Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Home() {

  const token = Cookies.get('token')
  
  if(token===undefined){
    return <Navigate to='/' />
  }



  return (
    <div className='card'>
      <Link to='/male' className='l'>
      <div className='male'>
        <img className='img1' src={male} alt="male" />
        <h1>Male</h1>
      </div>
      </Link>
      <Link to='/userform' className='l'>
      <div className='male'>
        <img className='img1' src={female} alt="female" />
        <h1>Female</h1>
      </div>
      </Link>
    </div>
  )
}

export default Home
