// Explore Page renderes top rated movies/explore tv shows. Infinite scrolling is also implemented after fetching data for specified type

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItems from "../Movie Items/Movie Items";
import "./explorePage.scss";
import { apiFetch } from "../../utils/api";
import InfiniteScroll from 'react-infinite-scroll-component';

const ExplorePage = () => {
  // Media Type (movie/tv)
  const { type } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch data for initial page load
  const fetchData = () => {
    apiFetch(`/${type}/top_rated?page=${pageNum}`).then(res => {
      setData(res);
      setLoading(false);
      setPageNum(prev => prev + 1);
    });
  }

  // Fetch data for next page when scrolling
  const fetchNextData = () => {
    apiFetch(`/${type}/top_rated?page=${pageNum}`).then(res => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data.results, ...res.results]
        })
      } else {
        setData(res);
      }
      setPageNum(prev => prev + 1);
    });
  }

  useEffect(() => {
    setPageNum(1);
    setData(null);
    fetchData();
  }, []);

  return (
    <div className="explore movies-section">
      <h3>Explore {type === "tv" ? "TV Shows" : "Movies"}</h3>
      {/* Infinite scrolling for loading more results */}
      <InfiniteScroll
        dataLength={data?.results?.length || []}
        next={fetchNextData}
        hasMore={pageNum <= data?.total_pages}
        loader={<h4>Loading...</h4>}
        className="scroll"
      >
        <MovieItems data={data?.results} loading={loading} type={type} />
      </InfiniteScroll>
    </div>
  )
}

export default ExplorePage;
