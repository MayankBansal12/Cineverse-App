// Responsible for rendering the homepage

import React from "react";
import "./home.scss";
import Banner from "./Banner/Banner";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";

const Home = () => {
  return (
    <>
      <Banner /> {/* Display the banner */}
      <Trending /> {/* Display the trending movies or TV shows */}
      <Popular /> {/* Display the popular movies or TV shows */}
      <TopRated /> {/* Display the top rated movies or TV shows */}
    </>
  )
}

export default Home;
