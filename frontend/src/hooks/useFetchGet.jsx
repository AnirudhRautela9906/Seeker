import { useState,useEffect } from "react";
import { getApi } from "../services/ApiConfig";

export const useFetchGet = (url)=>{
    const [data,setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getApi(url).then((res)=>{
            setLoading(false)
            if(res.message === undefined)
            {
                setData(res.data);
            }
            else
            {
                setError(res.message);
            }
        }).catch((data)=>{
            setLoading(false)
        })
        
        
        
    },[])

    return {error,loading,data}
}