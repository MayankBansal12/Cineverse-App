import React, { useEffect, useState } from 'react';
import "./search.scss";
import MovieItems from '../Movie Items/Movie Items';
import { useParams } from 'react-router-dom';
import { apiFetch } from "../../utils/api";
import InfiniteScroll from 'react-infinite-scroll-component';

const Search = () => {
  const { query } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    apiFetch(`/search/multi?query=${query}&page=${pageNum}`).then(res => {
      setData(res);
      setLoading(false);
      setPageNum(prev => prev + 1);
    });
  }

  const fetchNextData = () => {
    apiFetch(`/search/multi?query=${query}&page=${pageNum}`).then(res => {
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
  }, [query]);

  return (
    <div className="search-results">
      {data?.results?.length > 0 ? (
        <>
          <div className="heading">{`Search Results for "${query}"`}</div>
          <InfiniteScroll
            dataLength={data?.results?.length || []}
            next={fetchNextData}
            hasMore={pageNum <= data.total_pages}
            loader={<h4>Loading...</h4>}
            className="scroll"
          >
            <MovieItems data={data.results} loading={loading}/>
          </InfiniteScroll>
        </>
      ) : (
        <>
          <div className="heading">{`No Search Results found for "${query}"`}</div>
        </>
      )}
    </div>
  )
}

export default Search;
