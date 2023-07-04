import React, { useEffect, useState } from "react";
import "./banner.scss";
import useFetch from "../../../hooks/useFetchApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LazyLoadImage from "../../LazyLoadImage/ImageEffect";
import SearchIcon from '@mui/icons-material/Search';

const Banner = () => {
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const navigate = useNavigate();
  const url = useSelector((state) => state.home.urls);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 20);
    const bgImage = url.backdrop + data?.results?.[randomNum]?.backdrop_path;
    setBackground(bgImage);
  }, [data]);

  const showsearchResults = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="banner">
        { !loading && <div className="background-image">
            <LazyLoadImage src={background} />
        </div> }
      <div className="opacity-layer"></div>
      <div className="banner-content">
        <span className="title">What would you watch today?</span>
        <span className="subtitle">
          Limitless tv shows, movies waiting for you. Explore Now.
        </span>
        <div className="search-btn">
          <input
            type="search"
            placeholder="Search for movies, tv shows, people"
            onChange={(event) => setQuery(event.target.value)}
            onKeyUp={showsearchResults}
            value={query}
          />
          <button onClick={showsearchResults}><SearchIcon /></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
