import React from 'react';
import './footer.scss';
import { Grid } from '@mui/material';
import { Twitter, GitHub, Drafts, SettingsPhone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <h4>About</h4>
            <p>A popular movie and TV show database using TMDB api to fetch the movie's data.</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h4>Contact</h4>
            <p>contact@example.com</p>
            <p><SettingsPhone /> 123-456-7890</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h4>Overview</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/genre">Genres</a></li>
              <li><a href="/explore">Explore</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h4>Follow Us</h4>
            <div className="social-media-icons">
              <a href="#" className="icon-link"><Twitter /></a>
              <a href="#" className="icon-link"><GitHub /></a>
              <a href="#" className="icon-link"><Drafts /></a>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <hr />
            <p className="text-center">© 2023 CineVerse. All rights reserved.</p>
          </Grid>
        </Grid>
    </footer>
  );
};

export default Footer;
