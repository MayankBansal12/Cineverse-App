import React, { useState } from 'react';
import "./movieDetails.scss"
import { useParams } from 'react-router-dom';
import useFetchApi from '../../../hooks/useFetchApi';
import { useSelector } from 'react-redux';
import dayjs from "dayjs";
import Skeleton from 'react-loading-skeleton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Popup from '../Video PopUp/Popup';
import LazyLoadImage from "../../LazyLoadImage/ImageEffect";
import placeholder from  "../../../assets/poster-placeholder.jpg";

const MovieDetails = ({ video, crew }) => {
  const { type, id } = useParams();
  const { data, loading } = useFetchApi(`/${type}/${id}`);
  const url = useSelector((state) => state.home.urls);
  const bgImage = data.poster_path ? url.backdrop + data.poster_path : placeholder;
  const genres = data?.genres?.map(genre => genre);
  const date = data?.release_date || data?.first_air_date;
  const director = crew?.filter(item => item.job === "Director");
  const writer = crew?.filter(item => item.job === "Screenplay" || item.job === "Story" || item.job === "Writer");
  const creator=data?.created_by;
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="container">
      <div className="movie-details">
        {!loading ? (
          <>
            <div className="movie-poster">
              <LazyLoadImage src={bgImage} alt={"poster"} />
            </div>
            <div className="movie-content">
              <h4 className="movie-title">{data.title || data.original_name}</h4>
              <div className="movie-essentials">
                <p className="release-date">{dayjs(date).format("YYYY")}</p>
                <p className="movie-ratings" style={
                  { border: `4px solid ${data.vote_average > 7 ? "green" : data.vote_average > 4 ? "orange" : "red"}` }
                } >
                  {data.vote_average.toFixed(1)}
                </p>
              </div>
              <div className="genres">
                {genres?.map(genre => (
                  <p className="genre-name" key={genre.id}>{genre.name}</p>
                ))}
              </div>
              {data.tagline && <p className="tagline">{data.tagline}</p>}
              <p className="overview">{data.overview}</p>
              <button type="button" className="btn btn-primary mx-auto d-flex justify-content-center watch-btn" onClick={()=>setShowPopup(true)}><PlayCircleOutlineIcon /> Watch Promo!</button>
              
              <div className="other-info">
                {data.status && (
                  <div className="info-item">
                    <span className="bold">
                      Status:{" "}
                    </span>
                    <span className="light">
                      {data.status}
                    </span>
                  </div>
                )}
                {date && (
                  <div className="info-item">
                    <span className="bold">
                      Release Date:{" "}
                    </span>
                    <span className="light">
                      {dayjs(date).format("MMM D YYYY")}
                    </span>
                  </div>
                )}
                {data.runtime && (
                  <div className="info-item">
                    <span className="bold">
                      Run Time:{" "}
                    </span>
                    <span className="light">
                      {data.runtime}min
                    </span>
                  </div>
                )}
              </div>

              {/* For movies */}
              {director?.length > 0 && (
                <div>
                  <span className="bold">
                    Director:{" "}
                  </span>
                  <span className="light">
                    {director?.map((dir, i) => (
                      <span key={i}>
                        {dir.name}
                        {director.length -
                          1 !==
                          i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              )}
              {writer?.length > 0 && (
                <div>
                  <span className="bold">
                    ScreenPlay/Writer:{" "}
                  </span>
                  <span className="light">
                    {writer?.map((w, i) => (
                      <span key={i}>
                        {w.name}
                        {writer.length -
                          1 !==
                          i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              )}

              {/* For tv shows/series */}
              {creator?.length > 0 && (
                <div>
                  <span className="bold">
                    Creator:{" "}
                  </span>
                  <span className="light">
                    {creator?.map((c, i) => (
                      <span key={i}>
                        {c.name}
                        {creator.length -
                          1 !==
                          i && ", "}
                      </span>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </>
        ) : (
          // Loading Animation
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
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} videoId={video?.key} />
      </div>
    </div>
  )
}

export default MovieDetails;
