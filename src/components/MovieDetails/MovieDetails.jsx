import { useSelector } from "react-redux"
import './MovieDetails.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



function MovieDescription()  {
    console.log('inside movie description')

    const movieDetails = useSelector(store =>store.movieDetails)
    const history = useHistory();
    console.log("Movie from store", movieDetails);

    const backToMovies = () => {
        console.log('in back to movies')
        history.push('/')

    }

    return (
        <>
          <div className ="card" data-testid="movieDetails"> 
            <img src ={movieDetails.movie.poster} alt="Avatar" ></img>
            <h2>{movieDetails.movie.title}</h2>
            <p>{movieDetails.movie.description}</p>
        </div>
        <div>
            <button data-testid="toList" onClick={(backToMovies)}>Return</button>
        </div>
      </>
    )
}

export default MovieDescription




//<div className="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%"></img>
//   <div className="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//   </div>
// </div>