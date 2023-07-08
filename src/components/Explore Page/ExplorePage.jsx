import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieItems from "../Movie Items/Movie Items";
import useFetchApi from "../../hooks/useFetchApi";
import "./explorePage.scss";
import { apiFetch } from "../../utils/api";
import InfiniteScroll from 'react-infinite-scroll-component';

const ExplorePage = () => {
  const {type}=useParams();
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    apiFetch(`/${type}/top_rated?page=${pageNum}`).then(res => {
      setData(res);
      setLoading(false);
      setPageNum(prev => prev + 1);
    });
  }

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
      <h3>Explore {type==="tv"?"TV Shows":"Movies"}</h3>
      <InfiniteScroll
            dataLength={data?.results?.length || []}
            next={fetchNextData}
            hasMore={pageNum <= data?.total_pages}
            loader={<h4>Loading...</h4>}
            className="scroll"
      >
        <MovieItems data={data?.results} loading={loading} type={type}/>
      </InfiniteScroll>
    </div>
  )
}

export default ExplorePage;