import React from 'react';
import "./movieDetails.scss"
import { useParams } from 'react-router-dom';
import useFetchApi from '../../hooks/useFetchApi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import dayjs from "dayjs";
import Skeleton from 'react-loading-skeleton';

const MovieDetails = () => {
  const { type, id } = useParams();
  const { data, loading } = useFetchApi(`/${type}/${id}`);
  const url = useSelector((state) => state.home.urls);
  const bgImage = url.backdrop + data.poster_path;
  const genres = data?.genres?.map(genre => genre);
  const date = data?.release_date || data?.first_air_date;

  return (
    <div className="movie-details">
      {!loading ? (
        <>
          <div className="movie-poster">
            <LazyLoadImage src={bgImage} />
          </div>
          <div className="movie-content">
            <h4 className="movie-title">{data.title || data.original_name}</h4>
            <p className="ratings">{data.vote_average}</p>
            <p className="release-date">{dayjs(date).format("YYYY")}</p>
            <div className="genres">
              {genres?.map(genre => (
                <p className="genre-name" key={genre.id}>{genre.name}</p>
              ))}
            </div>
            <p className="tagline">{data.tagline}</p>
            <p className="overview">{data.overview}</p>
          </div>
        </>
      ) : (
        <div className="loading-skeleton">
          <Skeleton height={400} />
          <div className="movie-content">
            <Skeleton width={200} height={20} style={{ marginBottom: "10px" }} />
            <Skeleton width={100} height={15} style={{ marginBottom: "10px" }} />
            <Skeleton count={2} style={{ marginBottom: "10px" }} />
            <Skeleton count={5} width={80} height={15} style={{ marginBottom: "10px" }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails;
