import React, { useEffect, useState } from "react";
import MovieItems from "../../Movie Items/Movie Items";
import useFetchApi from "../../../hooks/useFetchApi";

const TopRated = () => {
  const [selectedOption, setSelectedOption] = useState("movie");
  
  const {data, loading}=useFetchApi(`/${selectedOption}/top_rated`);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="movies-section">
      <h3>Timeless Beauties</h3>
      <div className="sort-items">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <select className="custom-select" id="selectOption"
                value={selectedOption} onChange={handleSelectChange} >
                <option value="movie">Sort By Movies</option>
                <option value="tv">Sort By TV Shows</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <MovieItems data={data?.results} loading={loading} />
    </div>
  )
}

export default TopRated;