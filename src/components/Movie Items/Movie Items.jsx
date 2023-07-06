import React from "react";
import "./movieItems.scss";
import { useSelector } from "react-redux";

const MovieItems = ({data, loading}) => {

  const url = useSelector((state) => state.home.urls);

  const animationItem=()=>(
    <div className="animationItem">
      <div className="image animation"></div>
        <div className="text">
            <div className="title animation"></div>
            <div className="date animation"></div>
      </div>
    </div>
  )

  return (
    <div className="container movies-container">
    { !loading ? (
        <div className="row">
          {data?.map((item)=>(
            <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
              <div className="movie-item">
                <img src={url?.poster + item.poster_path} alt={item.title || item.original_name + "poster"} className="img-fluid" />
                <h4 className="movie-title">{item.title || item.original_name}</h4>
                <p className="release-date">{item.release_date || item.first_air_date}</p>
                <p className="ratings" style={{border: `4px solid ${item.vote_average>7?"green": item.vote_average>4?"orange":"red"}`}}>{item.vote_average.toFixed(1)}</p>
              </div>
            </div>
          ))}
        </div>
    ) :(
        <div className="loadingAnimation">
          {animationItem()}
          {animationItem()}
          {animationItem()}
          {animationItem()}
          {animationItem()}
          {animationItem()}
          {animationItem()}
          {animationItem()}
        </div>
      ) }
    </div>
  )
};

export default MovieItems;
