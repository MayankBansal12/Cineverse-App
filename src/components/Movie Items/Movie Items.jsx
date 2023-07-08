import React from "react";
import "./movieItems.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import placeholder from  "../../assets/poster-placeholder.jpg";
import LazyLoadImage from "../LazyLoadImage/ImageEffect";

const MovieItems = ({ data, loading, type }) => {
  const url = useSelector((state) => state.home.urls);
  const navigate = useNavigate();

  return (
    <div className="container movies-container">
      {!loading ? (
        <div className="row">
          {data?.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
              <div
                className="movie-item"
                onClick={() => {
                  navigate(`/${item.media_type || type}/${item.id}`);
                }}
              >
                <LazyLoadImage src={item.poster_path ? url?.poster + item.poster_path : placeholder}
                  alt={item.title || item.original_name + "poster"}
                  className="img-fluid" />
                <h4 className="movie-title">{item.title || item.name}</h4>
                <p className="release-date">{item.release_date || item.first_air_date}</p>
                <p
                  className="ratings"
                  style={{
                    border: `4px solid ${
                      item.vote_average > 7 ? "green" : item.vote_average > 4 ? "orange" : "red"
                    }`,
                  }}
                >
                  {item.vote_average?.toFixed(1) || 0}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
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

export default MovieItems;
