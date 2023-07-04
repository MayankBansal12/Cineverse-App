import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageEffect = ({src, alt}) => {
  return (
    <LazyLoadImage
    alt={alt || ""}
    effect="black-and-white"
    src={src} />
  )
}

export default ImageEffect;