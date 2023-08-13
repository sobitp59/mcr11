import { createContext, useContext } from "react";

import { useEffect, useState } from "react";
import { movies } from "../MovieDB";

const MovieContext = createContext();

export const MovieContextProvider = ({children}) => {
    const [moviesList, setMoviesList] = useState([]);
    const [watchList, setWatchList] = useState([])

    const addToWatchList = (movieID) => {
        const movie = moviesList?.find(({id}) => id === movieID);
        console.log(movie)
        setWatchList((prev) => [...prev, movie])
    }
    
    const removeFromWatchList = (movieID) => {
        const movies = watchList?.filter(({id}) => id !== movieID);
        setWatchList(movies)
    }

    const addNewMovie = (e, movieData, setShowForm) => {
        e.preventDefault();
        setMoviesList((prev) => [...prev, movieData])
        setShowForm(false)
    }


    useEffect(() => {
        setMoviesList(movies)
    }, [])

    const values = {
        moviesList : moviesList,
        watchList : watchList,
        addToWatchList,
        removeFromWatchList,
        addNewMovie
    }

    return(
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}

export const useData = () => useContext(MovieContext);