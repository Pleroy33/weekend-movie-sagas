import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieItem({ movie })  {

console.log('inside MovieItem');
console.log('movie', movie.id);
const dispatch = useDispatch();
const history = useHistory();

const handleOnClick = () => {
    console.log ('inside handle onClick')
    // const payload = movie.id
    dispatch({type:'FETCH_DETAILS', payload: movie.id})
    // dispatch({type:'FETCH_DESCRIPTION', payload:{movie}})
    history.push('/MovieDescription')
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

