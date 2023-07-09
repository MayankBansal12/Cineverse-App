// This component is responsible for loading recommanded/similar section below the detail page

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import placeholder from "../../../assets/poster-placeholder.jpg";
import LazyLoadImage from "../../LazyLoadImage/ImageEffect";
import "./moviesSection.scss";

const MoviesSection = ({ heading, data, loading, type }) => {
  const url = useSelector((state) => state.home.urls);
  const navigate = useNavigate();

  // If there are no movies to display, return null
  if (data?.length === 0) {
    return null;
  }

  return (
    <div className="moviesection-container">
      {/* Display the heading */}
      <h3 className="heading">{heading} {type === "tv" ? "TV Shows" : "Movies"}</h3>
      {!loading ? (
        <div className="moviesection-row">
          {/* Display the movie items */}
          {data?.map((item) => (
            <div className="moviesection-item" key={item.id} onClick={() => navigate(`/${item.media_type || type}/${item.id}`)}>
              {/* Display the movie poster */}
              <LazyLoadImage
                src={item.poster_path ? url?.poster + item.poster_path : placeholder}
                alt={item.title || item.original_name + "poster"}
                className="movie-poster"
              />
              <h4 className="moviesection-title">{item.title || item.name}</h4>
              <p className="release-date">{item.release_date || item.first_air_date || ""}</p>
              <p
                className="movie-ratings"
                style={{
                  border: `4px solid ${item.vote_average > 7 ? "green" : item.vote_average > 4 ? "orange" : "red"}`,
                }}
              >
                {item.vote_average.toFixed(1) || 0}
              </p>
            </div>
          ))}
        </div>
      ) : (
        // Loading Animation
        <div className="row">
          {[...Array(4)].map((_, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="movie-item">
                <Skeleton height={250} />
                <Skeleton count={2} style={{ marginTop: "10px" }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesSection;
