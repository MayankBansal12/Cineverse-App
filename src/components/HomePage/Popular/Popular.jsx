import React, { useEffect, useState } from "react";
import MovieItems from "../../Movie Items/Movie Items";
import useFetchApi from "../../../hooks/useFetchApi";

const Popular = () => {
  const [selectedOption, setSelectedOption] = useState("week");
  
  const {data, loading}=useFetchApi(`/trending/all/${selectedOption}`);
  // useEffect(()=>{
  // },[selectedOption]);


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="popular-section">
      <h3>What's Trending?</h3>
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

export default Popular;
