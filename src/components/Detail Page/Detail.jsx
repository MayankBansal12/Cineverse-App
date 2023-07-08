import React from 'react'
import MovieDetails from './Movie Detail/MovieDetails.jsx';
import useFetchApi from '../../hooks/useFetchApi.js';
import { useParams } from 'react-router-dom';
import Cast from './Cast/Cast.jsx';

const Detail = () => {
    const {type, id}=useParams();
    const {data: videoData}=useFetchApi(`/${type}/${id}/videos`);
    const {data: creditsData,loading}=useFetchApi(`/${type}/${id}/credits`);

    console.log(videoData.results, creditsData);

    return (
        <>
            <MovieDetails video={videoData?.results?.[0]} crew={creditsData?.crew} />
            <Cast cast={creditsData?.cast} />
        </> 
    )
}

export default Detail
