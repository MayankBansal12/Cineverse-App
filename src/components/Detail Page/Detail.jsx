// Detail.jsx is responsible for showing all details about movie/tv show

import React from 'react';
import MovieDetails from './Movie Detail/MovieDetails.jsx';
import useFetchApi from '../../hooks/useFetchApi.js';
import { useParams } from 'react-router-dom';
import Cast from './Cast/Cast.jsx';
import Videos from './Video Section/Videos.jsx';
import MoviesSection from './Movies Section/MoviesSection.jsx';

const Detail = () => {
    // Fetch mediatype and its id from url
    const { type, id } = useParams();

    // Fetch video data for the movie/TV show
    const { data: videoData, loading: videoLoading } = useFetchApi(`/${type}/${id}/videos`);

    // Fetch credits data for the movie/TV show
    const { data: creditsData } = useFetchApi(`/${type}/${id}/credits`);

    // Fetch similar movies/TV shows
    const { data: movieData, loading: movieLoading } = useFetchApi(`/${type}/${id}/similar`);

    // Fetch recommended movies/TV shows
    const { data: recommendedData, loading: recommendedLoading } = useFetchApi(`/${type}/${id}/recommendations`);

    return (
        <>
            {/* Display movie/TV show details */}
            <MovieDetails video={videoData?.results?.[0]} crew={creditsData?.crew} />

            {/* Display cast members */}
            <Cast cast={creditsData?.cast} />

            {/* Display videos related to the movie/TV show */}
            <Videos videos={videoData?.results} loading={videoLoading} />

            {/* Display similar movies/TV shows */}
            <MoviesSection heading={"Similar"} data={movieData?.results} loading={movieLoading} type={type} />

            {/* Display recommended movies/TV shows */}
            <MoviesSection heading={"Recommended"} data={recommendedData?.results} loading={recommendedLoading} type={type} />
        </>
    );
}

export default Detail;
