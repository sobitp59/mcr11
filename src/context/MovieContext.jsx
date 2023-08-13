import { createContext, useContext } from "react";

import { useEffect, useState } from "react";
import { movies } from "../MovieDB";

const MovieContext = createContext();

export const MovieContextProvider = ({children}) => {
    const [moviesList, setMoviesList] = useState([]);
    const [watchList, setWatchList] = useState([])

    const addToWatchList = (movie) => {
        setWatchList(prev => [...prev, movie])
    }


    useEffect(() => {
        setMoviesList(movies)
    }, [])

    const values = {
        moviesList : moviesList,
        watchList : watchList,
        addToWatchList
    }

    return(
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}

export const useData = () => useContext(MovieContext);