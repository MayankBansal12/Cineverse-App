import axios from "axios";

const baseURL=import.meta.env.VITE_APP_BASE_URL;
const tmdbToken=import.meta.env.VITE_APP_TMDB_TOKEN;

const headers={
    Authorization: "bearer "+ tmdbToken,
}

// To fetch the data from the api
export const apiFetch=async(url,params)=>{
    try {
        const {data}=await axios.get(baseURL+url,{
            headers,
            params,
        })
        return data;
    } catch (error) {
        console.log("Error in fetching",error);
        return error;
    }
};
