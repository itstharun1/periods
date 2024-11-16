import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.png'

import './imgcard.css'


const imgs1=[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
]

function Cardimg() {
  return (
    <div className="image-gallery">
         {imgs1.map((image, index) => ( 
            <div key={index} className="image-item"> 
            <img className='imgcard1' src={image} alt={`Image ${index + 1}`} /> 
            </div> ))} 
        </div>
  )
}

export default Cardimg
