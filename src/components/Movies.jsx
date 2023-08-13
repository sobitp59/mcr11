import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/MovieContext';
import AddMovieForm from './AddMovieForm';
import Watchlist from './Watchlist';

const Movies = () => {
    const {moviesList, addToWatchList, removeFromWatchList, watchList, query} = useData();
    const [selectedGenre, setSelectedGenre] = useState("")
    const [selectedYear, setSelectedYear] = useState(0)
    const [selectedRating, setSelectedRating] = useState(0)
    const [showForm, setShowForm] = useState(false);

    const moviesGenre = [...new Set(moviesList.map(({genre}) => genre).flat())]
    const moviesReleaseYear = [...new Set(moviesList?.map(({year}) => year))]


    const filteredMovies =  moviesList?.filter((movie) => selectedGenre ? movie.genre.includes(selectedGenre) : true)
                            ?.filter(({year}) => selectedYear ? Number(year) === Number(selectedYear) : true )
                            ?.filter(({rating}) => selectedRating ? Number(rating) === Number(selectedRating) : true)
                            ?.filter(({title}) => title.toLowerCase()?.includes(query?.toLowerCase()))
    
    const formRef = useRef();
    
    useEffect(() => {
        const closeForm = (e) => {
            if(!formRef.current.contains(e?.target)){
                setShowForm(false)
            }
        }
        document.addEventListener('mousedown', closeForm)
        return () => document.removeEventListener('mousedown', closeForm)
    }, [])


  return (
    <div className='movies'>
        {/* FILTER MOVIES */}
        <section className='movies__filter'>
            <h3>movies</h3>
            <select value={selectedGenre} onChange={(e) => setSelectedGenre(e?.target.value)}>
                <option value="">all genre</option>
                {moviesGenre?.map((genre, index) => <option key={index} value={genre}>{genre}</option>)}
            </select>
            <select onChange={(e) => setSelectedYear(e?.target?.value)}>
                <option  value="">release year</option>
                {moviesReleaseYear?.map((year, index) => <option key={index} value={year}>{year}</option>)}
            </select>
            <select onChange={(e) => setSelectedRating(e?.target?.value)}>
                <option value="">rating</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
            <button onClick={() => setShowForm(true)}>
                add a movie
            </button>
        </section>

        {/* MOVIES LISTS */}
        <ul className='movies__lists'>
            {filteredMovies?.map((movie) => (
                <>
                    <li  key={movie.id} className='movies__list'>
                        <Link to={`/movies/${movie?.id}`}>
                            <img src={movie.imageURL} alt={`poster of movie ${movie.title}`}/>
                            <h3>{movie.title}</h3>
                            <p>{movie.summary}</p>
                        </Link>
                        {  
                            watchList?.find(({id}) => id === movie?.id) ? 
                            <button onClick={() => removeFromWatchList(movie?.id)}>remove from watchlist</button> :
                            <button onClick={() => addToWatchList(movie?.id)}>add to watchlist</button>
                        }
                        
                    </li>
                </>
            ))}
        </ul>

        {showForm && <AddMovieForm setShowForm={setShowForm} formRef={formRef}/>}
    </div>
  )
}

export default Movies;