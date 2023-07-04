import React from 'react';
import "./footer.scss"
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons";
// import { RiHome2Line, RiMenu2Line, RiInfoLine } from "react-icons";

import FoundationIcon from '@mui/icons-material/Foundation';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import FilterListIcon from '@mui/icons-material/FilterList';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About</h4>
            <p>A popular movie and TV show database.</p>
          </div>
          <div className="col-md-3">
            <h4>Site Navigation</h4>
            <ul className="footer-links">
              <li><FoundationIcon /> <a href="/">Home</a></li>
              <li><FilterListIcon /> <a href="/genre">Genres</a></li>
              <li><ExploreIcon /> <a href="/explore">Explore</a></li>
              <li><LightbulbCircleIcon /> <a href="/about">About</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact</h4>
            <p><DraftsIcon /> contact@example.com</p>
            <p><SettingsPhoneIcon /> 123-456-7890</p>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <div className="social-media-icons">
              <a href="#" className="icon-link"><TwitterIcon /></a>
              <a href="#" className="icon-link"><GitHubIcon /></a>
              <a href="#" className="icon-link"><DraftsIcon /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr />
            <p className="text-center">© 2023 IMDb. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
