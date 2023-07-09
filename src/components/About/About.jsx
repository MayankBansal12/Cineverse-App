import React from 'react';
import './About.scss';
import { Twitter, GitHub, Drafts } from '@mui/icons-material';
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
      {/* <h3>Features</h3>
      <ul>
        <li><strong>Diverse Product Categories:</strong> ShopSense offers a comprehensive range of products across seven different categories, including fashion, electronics, foods and accessories. Whatever you're looking for, you'll find it here.</li>
        <li><strong>Product Details and Descriptions:</strong> We understand the importance of informed purchases. By clicking on a product, you can access detailed descriptions, specifications, and image to make well-informed buying decisions.</li>
        <li><strong>Easy Cart Management:</strong> Adding products to your cart is a breeze. Once you've found your desired items, you can conveniently manage the quantity, remove items, and review the contents of your cart, all from the navigation bar.</li>
        <li><strong>Secure Checkout:</strong> When you're ready to complete your purchase, our secure checkout process ensures that your personal and payment information is protected. Fill in your details, including shipping information and card details, and proceed confidently to place your order.</li>
      </ul> */}

      <h3>Get in Touch</h3>
      <p>You can mail me at <Drafts /><Link className="email" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptJQGXRhtBDKQrMSSBQSTpKJHXQDBCbfGrtBKSLFlmxgvsVkCZMGvnqcbrkMWtgDgcLrN" target="_blank">mayankbansal125@gmail.com</Link> or connect with any of the social media below.</p>
      
        {/* <div className="contact-github">
          <a href="https://github.com/MayankBansal12"><GitHub /> MayankBansal12</a>
        </div>
        <div className="contact-twitter">
          <a href="https://twitter.com/SimplerMayank"><Twitter /> SimplerMayank</a>
        </div> */}
      
      <span className="disclaimer">Disclaimer: It is just a personal web project, not for commercial use. Any information related to viewer is not stored anywhere.</span>
      </div>
    </div>
  );
};

export default About;