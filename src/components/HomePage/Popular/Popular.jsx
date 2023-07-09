// The Popular component is responsible for displaying a section of popular movies or TV shows on the homepage

import React, { useState } from "react";
import MovieItems from "../../Movie Items/Movie Items";
import useFetchApi from "../../../hooks/useFetchApi";

const Popular = () => {
  const [selectedOption, setSelectedOption] = useState("movie");
  
  // Fetching popular movies or TV shows based on the selected option
  const { data, loading } = useFetchApi(`/${selectedOption}/popular`);

  // Handle the change in the selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="movies-section">
      <h3>Current Favourites</h3>
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

      {/* Sending the data to movieItems for displaying all the movies */}
      <MovieItems data={data?.results} loading={loading}  type={selectedOption} />
    </div>
  )
}

export default Popular;
