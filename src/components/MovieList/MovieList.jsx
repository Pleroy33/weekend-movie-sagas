import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  
  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            // <div data-testid='movieItem' key={movie.id}>
            //   <h3>{movie.title}</h3>
            //   <img data-testid="toDetails" src={movie.poster} alt={movie.title}
            //   onClick={handleOnClick}
            //   />
            // </div>
            <MovieItem key={movie.id} movie={movie}/>

          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
