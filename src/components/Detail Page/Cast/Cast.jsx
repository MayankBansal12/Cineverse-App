import React from 'react';
import './Cast.scss';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import placeholder from "../../../assets/profile-placeholder.jpeg";
import LazyLoadImage from "../../LazyLoadImage/ImageEffect";

const Cast = ({ cast, loading }) => {
  const url = useSelector((state) => state.home.urls);

  return (
    <div className="cast-container">
      {cast && cast?.length > 0 && (
        <>
          <h4 className="cast-heading">Cast Members</h4>
          {loading ? (
            <div className="skeleton-wrapper">
              <Skeleton circle width={100} height={100} />
              <Skeleton width={150} height={20} />
              <Skeleton width={100} height={20} />
            </div>
          ) : (
            <div className="cast-row">
              {cast?.map((actor) => (
                <div className="cast-item" key={actor.id}>
                  <>
                    <div className="cast-image">
                      <LazyLoadImage src={actor.profile_path ? url.profile + actor.profile_path : placeholder} alt={actor.name} className="cast-photo" />
                    </div>
                    <div className="cast-details">
                      <h5 className="cast-name">{actor.name}</h5>
                      <p className="cast-character">{actor.character}</p>
                    </div>
                  </>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cast;
