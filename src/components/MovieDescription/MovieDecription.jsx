import { useSelector } from "react-redux"



function MovieDescription()  {
    console.log('inside movie description')

    const movieDetails = useSelector(store =>store.movieDetails)
    console.log("Movie from store", movieDetails);

    

    return (
        <div>
            <img src ={movieDetails.movie.poster}></img>
            <h2>{movieDetails.movie.title}</h2>
            <p>{movieDetails.movie.description}</p>
        </div>

      
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