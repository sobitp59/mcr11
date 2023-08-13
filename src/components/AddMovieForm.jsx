import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from '../context/MovieContext';

const AddMovieForm = ({setShowForm, formRef}) => {
    const {addNewMovie} = useData();
    const [newMovie, setNewMovie] = useState({
        id : uuidv4(),
        title : '',
        year : '',
        director : '',
        writer : '',
        summary : '',
        imageURL : '',
        cast : [],
        genre : [],
        rating : 0,
    })

    const onFormChangeHandler = (e) => {
        const {name, value} = e?.target;
        console.log(name)
        if(name === 'cast'){
            console.log(value.split(","))
            setNewMovie(prev => ({...prev, cast : value?.trim()?.split(",")}))
        } else if(name === 'genre'){
            setNewMovie(prev => ({...prev, genre : value?.trim()?.split(",")}))
        }else setNewMovie((prev) => ({...prev, [name] : value}))
    }

    const handleFormSubmit = (e) => {
        e?.preventDefault()
        console.log(newMovie)
    }

  return (
    <div className='form' ref={formRef}>
        <section>
            <h3>add new movie</h3>
            <button onClick={() => setShowForm(false)}>discard</button>
        </section>
        <form className='form__inputs' onSubmit={(e) => addNewMovie(e, newMovie, setShowForm)}>
            <label>
                enter movie name
                <input name='title' onChange={onFormChangeHandler} type="text" />
            </label>
            
            <label>
                enter movie summary
                <input name='summary'  onChange={onFormChangeHandler} type="text" />
            </label>

            <label>
                enter director name
                <input name='director'  onChange={onFormChangeHandler} type="text" />
            </label>

            <label>
                enter writer name
                <input name='writer'  onChange={onFormChangeHandler} type="text" />
            </label>

            <label>
                enter movie genre
                <p>* separate the genre by , </p>
                <input name='genre' type="text" onChange={onFormChangeHandler}/>
            </label>

            <label>
                enter released year
                <input name='year' type="text"  onChange={onFormChangeHandler}/>
            </label>
            
            <label>
                enter movie rating
                <input name='rating' type="text"  onChange={onFormChangeHandler}/>
            </label>
            
            <label>
                enter movie cast
                <p>* separate the cast by , </p>
                <input name='cast' type="text"onChange={onFormChangeHandler}/>
            </label>

            <label>
                enter movie poster URL
                <input name='imageURL'  onChange={onFormChangeHandler} type="text" />
            </label>

            <input type="submit" value={'add movie'}/>

        </form>
    </div>
  )
}

export default AddMovieForm