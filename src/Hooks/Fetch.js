import { useEffect, useState } from "react";
import { axiosInstance } from "../App";
// caching with react-router match params and not the api-url since the api-url can be long and hard to delete at differnt places.
const useFetchWithCache = (url, cachePath) => {
  // const [data, setdata] = useState(null);
  // const [loading, setloading] = useState(true);
  const [State, setState] = useState({
    isLoading: true,
    data: null,
  });
  useEffect(() => {
    axiosInstance.get(url).then((res) => {
      setState({
        isLoading: false,
        data: res.data,
      });
    });
  }, []);
  return [State.data, State.isLoading];
};

export default useFetchWithCache;
