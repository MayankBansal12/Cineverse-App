import React from 'react'
import MovieDetails from './Movie Detail/MovieDetails.jsx';
import useFetchApi from '../../hooks/useFetchApi.js';
import { useParams } from 'react-router-dom';
import Cast from './Cast/Cast.jsx';
import Videos from './Video Section/Videos.jsx';

const Detail = () => {
    const {type, id}=useParams();
    const {data: videoData, loading: videoLoading}=useFetchApi(`/${type}/${id}/videos`);
    const {data: creditsData,loading}=useFetchApi(`/${type}/${id}/credits`);

    console.log(videoData.results, creditsData);

    return (
        <>
            <MovieDetails video={videoData?.results?.[0]} crew={creditsData?.crew} />
            <Cast cast={creditsData?.cast} />
            <Videos videos={videoData?.results} loading={videoLoading} />            
        </> 
    )
}

export default Detail
