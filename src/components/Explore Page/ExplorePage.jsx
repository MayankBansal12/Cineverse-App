import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItems from "../Movie Items/Movie Items";
import useFetchApi from "../../hooks/useFetchApi";
import "./explorePage.scss";

const ExplorePage = () => {
  
  const {type}=useParams();
  const {data, loading}=useFetchApi(`/${type}/top_rated`);

  return (
    <div className="explore movies-section">
      <h3>Explore {type==="tv"?"TV Shows":"Movies"}</h3>
      <MovieItems data={data?.results} loading={loading} />
    </div>
  )
}

export default ExplorePage;