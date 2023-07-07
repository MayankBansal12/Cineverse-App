import { useState, useEffect } from "react";
import { apiFetch } from "../utils/api";

const useFetchApi=(endpoint)=>{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");
    const [error, setError]= useState("");

    const makeAPICall=async()=>{
        await apiFetch(endpoint).then(res=>{
            setData(res);
            setLoading(false);
        }).catch(err=>{
            setError(err);
            setLoading(false);
        });
    };
    
    useEffect(()=>{
        makeAPICall();
    },[endpoint]);

    return {data, loading, error};
};

export default useFetchApi;