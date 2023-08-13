import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../context/MovieContext';

const MovieDetails = () => {
    const {movieID} = useParams();
    const {moviesList, watchList, removeFromWatchList, addToWatchList} = useData();

    const movie = moviesList?.find(({id}) => id === movieID);
    const {id,cast, director, genre,imageURL, rating, summary, title, year, writer } = movie ?? {};
    console.log(movie)
  return (
    <div className='moviedetails'>
        <img src={imageURL} alt="" />
        <section>
            <h2>{title}</h2>
            <p>{summary}</p>
            <p><strong>written by :</strong>{writer}</p>
            <p><strong>directed by :</strong>{director}</p>
            <p><strong>cast :</strong>{cast?.join(", ")}</p>
            <p><strong>genre :</strong>{genre?.join(", ")}</p>
            <p><strong>released in : </strong>{year}</p>
            <p><strong>movieDooby rating: </strong>{rating}</p>
            {  
                            watchList?.find(({id}) => id === movie?.id) ? 
                            <button onClick={() => removeFromWatchList(movie?.id)}>remove from watchlist</button> :
                            <button onClick={() => addToWatchList(movie?.id)}>add to watchlist</button>
                        }
        </section>

    </div>
  )
}

export default MovieDetails