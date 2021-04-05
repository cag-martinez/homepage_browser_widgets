import {useState, useEffect} from 'react';

const useState = (initialUrl) => {
    // state variables
    const [data, setData] = useState(null);
    const [error, setEerror] = useState(null);
    const [isLoading, setIsloading] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect = (() => {
        setIsloading(true);

        fetch(url).then((response) => response.json())
        .then((data) => {
            setIsloading(false);
            setData(data);
        })
        .catch((error) =>{
                setIsloading(false);
                setEerror(error);
            });
        },[url]);
        return {data, error, isLoading, setUrl}
};

export default Fetch