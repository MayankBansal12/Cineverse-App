// LazyLoadImage Effect for loading image throughout the website

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageEffect = ({src, alt, className}) => {
  return (
    <LazyLoadImage
    alt={alt || ""}
    effect="black-and-white"
    className={className || ""}
    src={src} />
  )
}

export default ImageEffect;
