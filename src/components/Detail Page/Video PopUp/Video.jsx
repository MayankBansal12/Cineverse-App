import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "./Video.scss";

const Video = ({ videoId, showPopup, setShowPopup }) => {
  
  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup && (
        <div className="video-popup">
          <div className="video-popup-overlay" onClick={handleTogglePopup}></div>
          <div className="video-popup-content">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
