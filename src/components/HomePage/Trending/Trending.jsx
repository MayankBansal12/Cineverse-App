// Trending.jsx displays all trending movies and tv shows sorted on basis of week or day

import React, { useState } from "react";
import MovieItems from "../../Movie Items/Movie Items";
import useFetchApi from "../../../hooks/useFetchApi";

const Trending = () => {
  const [selectedOption, setSelectedOption] = useState("week");

  // Fetching popular movies or TV shows based on the selected option
  const {data, loading}=useFetchApi(`/trending/all/${selectedOption}`);

  // Handle the change in the selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="movies-section">
      <h3>What's Buzzing?</h3>
      <div className="sort-items">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <select className="custom-select" id="selectOption"
                value={selectedOption} onChange={handleSelectChange} >
                <option value="week">Sort By Week</option>
                <option value="day">Sort By Day</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <MovieItems data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending;
