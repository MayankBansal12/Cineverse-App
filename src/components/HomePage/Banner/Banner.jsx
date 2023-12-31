// Banner.jsx is responsible for loading the banner in homepage

import React, { useEffect, useState } from "react";
import "./banner.scss";
import useFetchApi from "../../../hooks/useFetchApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LazyLoadImage from "../../LazyLoadImage/ImageEffect";
import SearchIcon from '@mui/icons-material/Search';
import placeholder from "../../../assets/banner-placeholder.jpeg"

const Banner = () => {
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");
  const { data, loading } = useFetchApi("/movie/upcoming");
  const navigate = useNavigate();
  // base url for fetching banner image through api
  const url = useSelector((state) => state?.home?.urls);

  useEffect(() => {
    // Generate a random number to select a backdrop image from the data
    let randomNum = Math.floor(Math.random() * 20);
    const bgImage = url?.backdrop + data?.results?.[randomNum]?.backdrop_path;
    setBackground(bgImage ? bgImage : placeholder);
  }, [data]);

  const showsearchResults = (event) => {
    // Trigger search when "Enter" key is pressed
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setQuery("");
    }
  };

  const navigateSearch = () => {
    // Trigger search when search button is clicked
    if (query.length > 0) {
      navigate(`/search/${query}`);
      setQuery("");
    }
  }

  return (
    <div className="banner">
      {!loading && (
        <div className="background-image">
          <LazyLoadImage src={background} alt="background" />
        </div>
      )}
      <div className="opacity-layer"></div>
      <div className="banner-content">
        <span className="title">What would you watch today?</span>
        <span className="subtitle">
          Limitless tv shows, movies waiting for you. Explore Now.
        </span>
        <div className="search-btn">
          <input
            type="search"
            placeholder="Search for any movies & tv shows"
            onChange={(event) => setQuery(event.target.value)}
            onKeyUp={showsearchResults}
            value={query}
          />
          <button onClick={navigateSearch}><SearchIcon /></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
