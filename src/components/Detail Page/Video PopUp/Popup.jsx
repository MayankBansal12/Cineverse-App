// Uses React Player to play video through youtube

import React from 'react';
import ReactPlayer from 'react-player';
import "./popup.scss";

const Popup = ({ videoId, showPopup, setShowPopup }) => {
  
  // Function to handle toggling the visibility of the popup
  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup && (
        <div className="video-popup">
          {/* Overlay to close the popup when clicked */}
          <div className="video-popup-overlay" onClick={handleTogglePopup}></div>
          <div className="video-popup-content">
            {/* ReactPlayer component to display the video */}
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

export default Popup;
