import React from 'react';
const videos = [ 'l74eDdx2r1w', 
    '0bq9f5A62C8', 
    'b5TVaoN5wM4'
];

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      {videos.map((video, index) => (
        <div key={index} className="video-item">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`YouTube Video ${index + 1}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
