import { useState } from "react"
import { Link } from "react-router-dom"
import "../App.css"
import { useData } from "../context/MovieContext"
 

const Header = () => {
  const {handleQueryChange} = useData();
  return (
    <div className="header">
        <Link to={"/"}> movieDooby </Link>
        <input type="search" onChange={handleQueryChange} placeholder="search movies..."/>
        <section>
            <Link to={"/"}>movies</Link>
            <Link to={"/watchlist"}>watchlist</Link>
        </section>
        <ul>
          {}
        </ul>
    </div>
  )
}

export default Header