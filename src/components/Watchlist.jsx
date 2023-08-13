import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import { useData } from '../context/MovieContext';

const Watchlist = () => {
    const {watchList, addToWatchList, removeFromWatchList, moviesList} = useData();
    console.log(watchList)
  return (
    <div>
        <h2>watchList</h2>
        {watchList?.length === 0 ? (
            <h2>no movies in the watchlist</h2>
        ) : (
            <ul className='movies__lists'>
            {watchList?.map((movie) => (
                <>
                    <li  key={movie.id} className='movies__list'>
                        <Link to={`/movies/${movie?.id}`}>
                            <img src={movie.imageURL} alt={`poster of movie ${movie.title}`}/>
                            <h3>{movie.title}</h3>
                            <p>{movie.summary}</p>
                        </Link>
                         
                            <button onClick={() => removeFromWatchList(movie?.id)}>remove from watchlist</button> 
                            
                        
                    </li>
                </>
            ))}
        </ul>
        )}
    </div>
  )
}

export default Watchlist