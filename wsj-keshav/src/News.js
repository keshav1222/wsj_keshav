import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "9676b75be51d4bfaaceb465ce184d66d";

    useEffect(() => {
        axios
        .get(`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${apiKey}`
        )
        .then((Response) => setData(Response.data))
        .catch((error) => console.log(error));
    }, []);

    return(
        <NewsContext.Provider value={{ data }}>{props.children}</NewsContext.Provider>
    );
};

