// Footer component---consisting of about, contact, site links and social links.

import React from 'react';
import './footer.scss';
import { Grid } from '@mui/material';
import { Twitter, GitHub, SettingsPhone, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <h4>About</h4>
          <p>CineVerse App is a movie database site that fetches information from the TMDB database. It provides detailed
          information about movies and TV shows, including cast, description, and videos.</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h4>Contact</h4>
          <a href="mailto:mayankbansal125@gmail.com">mayankbansal125@gmail.com</a>
          <p><SettingsPhone /> 123-456-7890</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/explore/movie">Explore Movies</a></li>
            <li><a href="/explore/tv">Explore TV Shows</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h4>Get in touch</h4>
          <div className="social-media-icons">
            <a href="https://twitter.com/SimplerMayank" className="icon-link"><Twitter /></a>
            <a href="https://github.com/MayankBansal12" className="icon-link"><GitHub /></a>
            <a href="https://www.linkedin.com/in/mayank-bansal-b14837247/" className="icon-link"><LinkedIn /></a>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <hr />
          <p className="text-center">© 2023 CineVerse. All rights reserved. Made by Mayank Bansal.</p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
