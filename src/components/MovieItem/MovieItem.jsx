import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


//component that separated out the individual movie from movies.map
function MovieItem({ movie })  {

// console.log('inside MovieItem');
// console.log('movie', movie.id);
const dispatch = useDispatch();
const history = useHistory();

const handleOnClick = () => {//function to handle onclick 
    console.log ('inside handle onClick')
    dispatch({type:'FETCH_DETAILS', payload: movie.id})//dispatch that uses FETCH_DETAILS  and sends the payload the id of the movie clicked on
    history.push('/MovieDetails')//sends us to the MovieDetails page using useHistory
   };


    return (
<div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img data-testid="toDetails" src={movie.poster} alt={movie.title}
              onClick={handleOnClick}
              />

              
            </div>
    )
}


export default MovieItem

