import React from 'react';
import './notFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound-container">
        <span class="notfound-subtitle">Error 404</span>
        <h1 class="notfound-title">Hey Movie Buff!</h1>
        <p class="notfound-text">I don't think we have something to show you up here. Try again</p>
        <Link to="/" class="home-btn">Back to Home</Link>
    </div>
  );
};

export default NotFound;
