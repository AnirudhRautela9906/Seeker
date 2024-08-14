import { useState, useEffect } from "react";
import { postApi } from "../services/ApiConfig";

export const useFetchPost = (url, body, isLogin ) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("gone");
    if (isLogin) {
      postApi(url, body)
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
            setLoading(false);
            setError(error.response.data.message || "unknown error");
            console.log("hi");
        });
    }
    
}, [body]);

  return { error, loading, data };
};
