import { useState, useEffect } from "react";
import { apiFetch } from "../utils/api";

const useFetchApi = (endpoint) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  // Function to make the API call and handle the response
  const makeAPICall = async () => {
    try {
      // Call the API fetch function with the specified endpoint
      const response = await apiFetch(endpoint);
      
      // Update the data state with the fetched response
      setData(response);
    } catch (error) {
      // Set the error state if an error occurs during the API call
      setError("An error occurred while fetching the data.");
    } finally {
      // Set the loading state to false once the API call is completed
      setLoading(false);
    }
  };

  // Fetch data on component mount or when the endpoint changes
  useEffect(() => {
    makeAPICall();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchApi;
