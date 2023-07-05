import React, { useEffect, useState } from 'react';
import './header.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Movie, LightbulbCircle, Tv, MenuOpen, KeyboardArrowDown, Close } from '@mui/icons-material';

const Header = () => {
  const [query, setQuery] = useState("");
  const [Yscroll,setYScroll]=useState(0);
  const [show,setShow]=useState("normal");
  const [arrowDown, setArrowDown] = useState(false);
  const [search, showSearch]=useState(false);
  const navigate = useNavigate();
  const location=useLocation();

  // For new location scroll back to 0
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location]);

  const handleScroll=()=>{
    if(window.scrollY>550){
      if(window.scrollY > Yscroll){
        setShow("hide");
      }else{
        setShow("show");
      }
    }else{
      setShow("normal");
    }

    setYScroll(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return (()=>window.removeEventListener("scroll",handleScroll))
  },[Yscroll]);

  // Navigate to search query when click "enter"
  const showsearchResults = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      showSearch(false);
      navigate(`/search/${query}`);
    }
  };

  // Whenever redirected to a new page
  const navigation=(link)=>{
    showSearch(false);
    navigate(link);
  }

  return (
    <header className="header">
      <nav className={`navbar navbar-expand-lg navbar-light `+show}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <h4 className="logo">CineVerse</h4>
            {/* <img src="placeholder-logo.png" alt="Logo" /> */}
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnav" aria-controls="navbarnav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setArrowDown(!arrowDown)}>
            {!arrowDown ? <MenuOpen /> : <KeyboardArrowDown />}
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarnav">
            <ul className="navbar-nav">
              <li className="nav-item" onClick={()=>navigation("/explore/movie")}>
                  <Movie /> Movies
              </li>
              <li className="nav-item" onClick={()=>navigation("/explore/tv")}>
                  <Tv /> TV Shows
              </li>
              <li className="nav-item" onClick={()=>navigation("/about")}>
                  <LightbulbCircle /> About
              </li>
            </ul>
          </div>

          <div className="search-btn search">
            <button type="submit" className="btn btn-outline-dark">
              <Search onClick={()=>{
                showSearch(true)
                const toggle=document.querySelector("#navbarnav");
                toggle.classList.remove("show");
                setArrowDown(false);
              }} />
            </button>
          </div>

        </div>
      </nav>

      {/* Search Query when clicked on search btn at navbar */}
      { search && <div className="search-query">
          <input
            type="text"
            placeholder="Search for movies, tv shows, people"
            onChange={(event) => setQuery(event.target.value)}
            onKeyUp={showsearchResults}
            value={query}
          />
          <Close onClick={()=>showSearch(false)} />
      </div> }
    </header>
  );
};

export default Header;
