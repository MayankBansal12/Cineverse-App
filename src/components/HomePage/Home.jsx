import React from 'react';
import "./home.scss";
import Banner from './Banner/Banner';
import Trending from './Trending/Trending';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';

const Home = () => {
  return (
    <>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </>
  )
}

export default Home;
