import React from 'react';
import './about.scss';
import { Drafts } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container container">
      <div className="about-content">
        <h2 className="about-heading">About CineVerse App</h2>
        <p className="about-description">
          The CineVerse App is a movie database site that fetches information from the TMDB database. It provides detailed
          information about movies and TV shows, including cast, description, and videos. This project was developed using
          React and the TMDB API. The frontend is designed using SCSS and Bootstrap.
        </p>
        <h3>Features</h3>
        <ul>
          <li>Browse a vast collection of movies and TV shows</li>
          <li>View detailed information about each movie or TV show, including cast, description, and videos</li>
          <li>Search for specific movies or TV shows</li>
          <li>Responsive design for optimal viewing on different devices</li>
        </ul>

        <h3>Get in Touch</h3>
        <p>You can mail me at <Drafts /><Link className="email" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptJQGXRhtBDKQrMSSBQSTpKJHXQDBCbfGrtBKSLFlmxgvsVkCZMGvnqcbrkMWtgDgcLrN" target="_blank">mayankbansal125@gmail.com</Link> or connect with any of the social media below.</p>

        <span className="disclaimer">Disclaimer: It is just a personal web project, not for commercial use.</span>
      </div>
    </div>
  );
};

export default About;