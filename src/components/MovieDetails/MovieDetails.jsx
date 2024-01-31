import { useSelector } from "react-redux"
import './MovieDetails.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



function MovieDetails()  {
    console.log('inside movie description')

    const movieDetails = useSelector(store =>store.movieDetails)//set movieDetails to the movieDetails reducer 
    console.log(movieDetails[0]?.id)//console.log to make sure we're accessing the data from the reducer.
    const history = useHistory();//set history to useHistory

    const backToMovies = () => {//function that sends view back to MovieList (home) on button click
        console.log('in back to movies')
        history.push('/')//using useHistory to return view back to the home page

    }

    return (
        <>
          <div className ="card" data-testid="movieDetails"> 
            <img src ={movieDetails[0]?.poster} alt="Avatar" ></img>
            <h2>{movieDetails[0]?.title}</h2>
            <h3>{movieDetails[0]?.genres}</h3>
            <p>{movieDetails[0]?.description}</p>
        </div>
        <div>
            <button data-testid="toList" onClick={(backToMovies)}>Return</button>
        </div>
      </>
    )
}

export default MovieDetails




