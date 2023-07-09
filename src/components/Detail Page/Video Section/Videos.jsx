// This component is used to display all the related videos for any movie/tv 

import React, { useState } from 'react';
import './videos.scss';
import LazyLoadImage from "../../LazyLoadImage/ImageEffect";
import { PlayCircleOutline } from '@mui/icons-material';
import Skeleton from 'react-loading-skeleton';
import placeholder from "../../../assets/banner-placeholder.jpeg";
import Popup from '../Video PopUp/Popup';

const Video = ({ videos, loading }) => {
  // show popup only when clicked on button
  const [showPopup, setShowPopup] = useState(false);

  // stores video id for playing the video
  const [videoId, setVideoId] = useState(null);

  return (
    <div className="video-container">
      {/* Renders only when videos are available for specific movie/show */}
      {videos && videos?.length > 0 && (
        <>
          <h4 className="video-heading">Related Videos</h4>
          {loading ? (
            <div className="skeleton-wrapper">
              <Skeleton width={150} height={100} />
              <Skeleton width={100} height={20} />
            </div>
          ) : (
            <div className="video-row">
              {videos.map((video) => (
                // Store the video id and display the video popup
                <div className="video-item" key={video.id} onClick={() => {
                  setShowPopup(true);
                  setVideoId(video.key);
                }}>
                  {/* Fetches video thumbnail with the help of youtube */}
                  <>
                    <LazyLoadImage
                      src={video.key ? `https://i.ytimg.com/vi/${video.key}/hqdefault.jpg` : placeholder}
                      alt={video.name}
                      effect="blur"
                      className="video-thumbnail"
                    />
                    {/* Play button in the center */}
                    <div className="play-button">
                      <PlayCircleOutline />
                    </div>
                    <h5 className="video-title">{video.name}</h5>
                  </>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {/* Popup component for displaying video */}
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} videoId={videoId} />
    </div>
  );
};

export default Video;
