import React from 'react'
import MovieDetails from './Movie Detail/MovieDetails.jsx';
import useFetchApi from '../../hooks/useFetchApi.js';
import { useParams } from 'react-router-dom';
import Cast from './Cast/Cast.jsx';
import Videos from './Video Section/Videos.jsx';
import MoviesSection from './Movies Section/MoviesSection.jsx';

const Detail = () => {
    const {type, id}=useParams();
    const {data: videoData, loading: videoLoading}=useFetchApi(`/${type}/${id}/videos`);
    const {data: creditsData}=useFetchApi(`/${type}/${id}/credits`);
    const {data: movieData, loading: movieLoading}=useFetchApi(`/${type}/${id}/similar`);
    const {data: recommendedData, loading: recommendedLoading}=useFetchApi(`/${type}/${id}/recommendations`);

    return (
        <>
            <MovieDetails video={videoData?.results?.[0]} crew={creditsData?.crew} />
            <Cast cast={creditsData?.cast} />
            <Videos videos={videoData?.results} loading={videoLoading} /> 
            <MoviesSection heading={"Similar"} data={movieData?.results} loading={movieLoading} type={type} />
            <MoviesSection heading={"Recommended"} data={recommendedData?.results} loading={recommendedLoading} type={type} />
        </> 
    )
}

export default Detail
