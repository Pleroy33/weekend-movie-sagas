


function MovieItem( {movie})  {
console.log('inside MovieItem')
console.log('movie', movie)
const handleOnClick = () => {
    console.log ('inside handle onClick')
    
   }


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

