import React, { useState } from 'react';
import './videos.scss';
import LazyLoadImage from "../../LazyLoadImage/ImageEffect";
import { PlayCircleOutline } from '@mui/icons-material';
import Skeleton from 'react-loading-skeleton';
import placeholder from "../../../assets/banner-placeholder.jpeg";
import Popup from '../Video PopUp/Popup';

const Video = ({ videos, loading }) => {
    const [showPopup, setShowPopup]=useState(false);
    const [videoId,setVideoId]=useState(null);

  return (
    <div className="video-container">
      {videos && videos?.length>0 && (
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
                <div className="video-item" key={video.id} onClick={()=>{
                    setShowPopup(true);
                    setVideoId(video.key);
                }}>
                  <>
                    <LazyLoadImage
                      src={video.key ? `https://i.ytimg.com/vi/${video.key}/hqdefault.jpg` : placeholder}
                      alt={video.name}
                      effect="blur"
                      className="video-thumbnail"
                    />
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
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} videoId={videoId} />
    </div>
  );
};

export default Video;
