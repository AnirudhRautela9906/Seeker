import { useState,useEffect } from "react";
import { postApi } from "../services/ApiConfig";

export const useFetchPost = (url,body,isLogin)=>{
    const [data,setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        // console.log("gone");
        if(isLogin)
        postApi(url,body).then((res)=>{
            setLoading(false)
            if(res.message === undefined)
            {
                console.log(res.data);
                setData(res.data);
            }
            else
            {
                console.log(res.data);
                setError(res.message);
            }
        }).catch((error)=>{
            console.log(body);
            setLoading(false)
            setError(error.response.data.message || "unknown error");
        })
        
        
        
    },[body])

    return {error,loading,data}
}