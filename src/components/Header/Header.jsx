import React, { useState } from 'react';
import "./header.scss";
import { useNavigate } from 'react-router-dom';
import { Search, Foundation, LightbulbCircle, Explore, FilterList, Twitter, GitHub, Drafts, SettingsPhone } from '@mui/icons-material';

const Header = () => {
  const [query,setQuery]=useState("");
  const navigate = useNavigate();
  const showsearchResults = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    // <header className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">
    //       <img src="placeholder-logo.png" alt="Logo" />
    //     </a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbar">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Genres</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Explore</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">About</a>
    //         </li>
    //       </ul>
    //       <form className="form-inline my-2 my-lg-0">
    //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </header>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <h4 className="logo">CineVerse</h4>
        {/* <img src="placeholder-logo.png" alt="Logo" /> */}
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Foundation />
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            {/* <FilterList /> */}
            <Explore />
            <a className="nav-link" href="/explore">Explore</a>
          </li>
          <li className="nav-item">
            <LightbulbCircle />
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
        <div className="search-btn">
        <input
          type="search" className="form-control mr-sm-2"
          placeholder="Search for movies, tv shows, people"
          onChange={(event) => setQuery(event.target.value)}
          onKeyUp={showsearchResults}
          value={query}
        />
        <button type="submit" onClick={showsearchResults} className="btn btn-outline-dark my-2 my-sm-0"><Search /></button>
      </div>
        {/* <div>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </div> */}
      </div>
    </div>
  </nav>
  )
}

export default Header;
