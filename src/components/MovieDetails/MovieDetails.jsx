import { useSelector } from "react-redux"
import './MovieDetails.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



function MovieDetails()  {
    console.log('inside movie description')

    const movieDetails = useSelector(store =>store.movieDetails)
    console.log(movieDetails)
    const history = useHistory();

    const backToMovies = () => {
        console.log('in back to movies')
        history.push('/')

    }

    return (
        <>
          <div className ="card" data-testid="movieDetails"> 
            <img src ={movieDetails.poster} alt="Avatar" ></img>
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.description}</p>
        </div>
        <div>
            <button data-testid="toList" onClick={(backToMovies)}>Return</button>
        </div>
      </>
    )
}

export default MovieDetails




