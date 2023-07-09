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
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHXwLGfZzsVlbVNhRSVsHztQtWpXVSBqmRKkfmzvxXlgMdRwQjNzcgsSGbTFvfKPgQbSK">mayankbansal125@gmail.com</a>
            <p><SettingsPhone /> 123-456-7890</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* <h4>Overview</h4> */}
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/explore/movie">Explore Movies</a></li>
              <li><a href="/explore/tv">Explore TV Shows</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h4>Follow Us</h4>
            <div className="social-media-icons">
              <a href="https://twitter.com/SimplerMayank" className="icon-link"><Twitter /></a>
              <a href="https://github.com/MayankBansal12" className="icon-link"><GitHub /></a>
              {/* <a href="" className="icon-link"><Drafts /></a> */}
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <hr />
            <p className="text-center">© 2023 CineVerse--Mayank Bansal. All rights reserved.</p>
          </Grid>
        </Grid>
    </footer>
  );
};

export default Footer;
