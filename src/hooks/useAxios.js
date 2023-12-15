import React, {useState} from 'react';
import axios from 'axios';
import {v1 as uuid} from "uuid";

const useAxios = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        try {
            let response = await axios.get(url);
            setData(cards => [...cards, { ...response.data, id: uuid() }]);
        } catch(error) {
            setError(error);
        }
    }
    return [data, fetchData, error]
}

export default useAxios;