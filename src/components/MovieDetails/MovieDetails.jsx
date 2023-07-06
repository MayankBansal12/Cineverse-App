import React from 'react';
import "./movieDetails.scss"

const MovieDetails = () => {
  return (
    <div style={{height: "1000px", background: "midnightblue"}}>
      Movie Details
    </div>
  )
}

export default MovieDetails;

// Structure of object from api call (data.results)
// backdrop_path: "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg"
// genre_ids: (5) [16, 35, 10751, 14, 10749]
// id: 976573
// original_language: "en"
// original_title: "Elemental"
// overview: "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common."
// popularity: 1532.675
// poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg"
// release_date: "2023-06-14"
// title: "Elemental"
// video: false
// vote_average: 7.5
// vote_count: 292
