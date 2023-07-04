import React, { useState } from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';
import { Search, Foundation, LightbulbCircle, Explore, MenuOpen, KeyboardArrowDown } from '@mui/icons-material';

const Header = () => {
  // const [query, setQuery] = useState("");
  const [arrowDown, setArrowDown]=useState(false);

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">
          <h4 className="logo">CineVerse</h4>
          {/* <img src="placeholder-logo.png" alt="Logo" /> */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setArrowDown(!arrowDown)}>
          {!arrowDown?<MenuOpen />:<KeyboardArrowDown/>}
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <Foundation /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/explore">
                <Explore /> Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <LightbulbCircle /> About
              </a>
            </li>
          </ul>
          <div className="search-btn">
            <button type="submit" className="btn btn-outline-dark">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
