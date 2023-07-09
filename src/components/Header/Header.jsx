/**
 The Header component displays the navigation bar at the top of the website.
 It provides options for navigating to different sections of the site. The component also includes a search feature. 
 The header dynamically adjusts its appearance based on the user's scrolling behavior. 
 It also handles the navigation logic when a menu item or search query is clicked.
 */

import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Movie, LightbulbCircle, Tv, MenuOpen, KeyboardArrowDown, Close } from "@mui/icons-material";

const Header = () => {
  const [query, setQuery] = useState("");
  const [Yscroll, setYScroll] = useState(0);
  const [show, setShow] = useState("normal");
  const [arrowDown, setArrowDown] = useState(false);
  const [search, showSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // For new location, scroll back to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //Changing bg for navbar as per logic to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 500) {
      showSearch(false);

      if (window.scrollY > Yscroll) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("normal");
    }

    setYScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [Yscroll]);

  // Navigate to search query when "Enter" key is pressed
  const showSearchResults = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      showSearch(false);
      navigate(`/search/${query}`);
      setQuery("");
    }
  };

  // Navigate to the link specified
  const navigation = (link) => {
    showSearch(false);
    navigate(link);
  };

  return (
    <header className="header">
      <nav className={`navbar navbar-expand-lg navbar-light ${show}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <h4 className="logo">CineVerse</h4>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarnav"
            aria-controls="navbarnav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setArrowDown(!arrowDown)}
          >
            {!arrowDown ? <MenuOpen /> : <KeyboardArrowDown />}
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarnav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={() => navigation("/explore/movie")}>
                <Movie /> Movies
              </li>
              <li className="nav-item" onClick={() => navigation("/explore/tv")}>
                <Tv /> TV Shows
              </li>
              <li className="nav-item" onClick={() => navigation("/about")}>
                <LightbulbCircle /> About
              </li>
            </ul>
          </div>

          <div className="search-btn search">
            <button
              type="submit"
              className="btn btn-outline-dark"
              onClick={() => {
                showSearch(true);
                const toggle = document.querySelector("#navbarnav");
                toggle.classList.remove("show");
                setArrowDown(false);
              }}
            >
              <Search />
            </button>
          </div>
        </div>
      </nav>

      {/* Search Query when clicked on search button in the navbar */}
      {search && (
        <div className="search-query">
          <input
            type="text"
            placeholder="Search for any movie & tv shows"
            onChange={(event) => setQuery(event.target.value)}
            onKeyUp={showSearchResults}
            value={query}
          />
          <Close onClick={() => showSearch(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
