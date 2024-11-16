import React from 'react';
import './male.css'

const videos = [ 
    {
        "id": 1,
        "title": "Monday",
        "description": "Chest+Triceps",
        "url": "YFWmcNXRWy"
    },
    {
        "id": 2,
        "title": "Tuesday",
        "description": "Back+Biceps+Abs",
        "url": "b-PdpvH8n8U"
    },
    {
        "id": 1,
        "title": "Wednesday",
        "description": "Shoulders+Legs",
        "url": "Q8WOStLPYVk"
    },
    {
        "id": 4,
        "title": "Thursday",
        "description": "Chest+Triceps",
        "url": "YFWmcNXRWy"
    },
    {
        "id": 5,
        "title": "Friday",
        "description": "Back+Biceps+Abs",
        "url": "b-PdpvH8n8U"
    },
    {
        "id": 6,
        "title": "Saturday",
        "description": "Shoulders+Legs",
        "url": "Q8WOStLPYVk"
    },
    
];

const Male = () => {
  return (
    <div className="videog">
       
      {videos.map((video, index) => (
        <div key={index} className="video-item">
            <h2>{video.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`YouTube Video ${index + 1}`}
          ></iframe>
          <h3>{video.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default Male;
