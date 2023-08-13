import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/MovieContext';

const Watchlist = () => {
    const {watchList, addToWatchList} = useData();
  return (
    <div>
        <h2>watchList</h2>
        {watchList?.length === 0 ? (
            <h2>no movies in the watchlist</h2>
        ) : (
            <ul className='movies__lists'>
            {watchList?.map((movie) => (
                <Link key={movie.id} className='movies__list'>
                    <img src={movie.imageURL} alt={`poster of movie ${movie.title}`}/>
                    <h3>{movie.title}</h3>
                    <p>{movie.summary}</p>

                    {watchList?.find(({id}) => id === movie?.id ? <button onClick={() => addToWatchList(movie)}>remove from watchlist</button> : <button onClick={() => addToWatchList(movie)}>add to watchlist</button> )}
                </Link>
            ))}
        </ul>
        )}
    </div>
  )
}

export default Watchlist