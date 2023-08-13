import { Link } from "react-router-dom"
import "../App.css"
 

const Header = () => {
  return (
    <div className="header">
        <Link to={"/"}> movieDooby </Link>
        <input type="search" placeholder="search movies..."/>
        <section>
            <Link to={"/"}>movies</Link>
            <Link to={"/watchlist"}>watchlist</Link>
        </section>
    </div>
  )
}

export default Header