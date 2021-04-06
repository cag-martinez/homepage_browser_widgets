import {useState, useEffect} from "react";

const Fetch = (initialUrl) => {
  // state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect
    (() => {
      setIsloading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setIsloading(false);
          setData(data);
          console.log(data)
        })
        .catch((error) => {
          setIsloading(false);
          setError(error);
        });
    },
    [url]);
  return { data, error, isLoading, setUrl };
};

export default Fetch;
