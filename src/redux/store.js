import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_GENRES', fetchAllGenres)
  yield takeEvery('FETCH_DETAILS', fetchDetails);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}
function* fetchDetails(action) {
  // console.log(action.payload) // used  to see what was coming from the action.payload
  // get the id for the axios get 
  try {
    const genreDetails = yield axios.get(`/api/genres/${action.payload}`)
    console.log("detailsResponse:", genreDetails.data); //seeing data is  coming back from the axios request
    //Set the response data to the movieDetails reducer
    yield put ({ 
      type: 'SET_DETAILS',
      payload: genreDetails.data
    })
  } catch (error) {
    console.log('fetchGenreDetails error', error)
  }
}
function* fetchAllGenres() {
  try {
    // Get the genres:
    const genresResponse = yield axios.get('/api/genres');
    //Set the value of the genres reducer:
    yield put({
      type: 'SET_GENRES',
      payload: genresResponse.data
    })
  } catch (error) {
    console.log('fetchAllGenres error:', error);
  }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

//Used to store the indvidual genre names

// const genreNames = (state= [], action) => {
//   switch (action.type) {
//     case 'FETCH_GENRENAMES':
//       return action.payload;
//       default:
//         return state;
//   }
// }
// Used to store the individual movies description
const movieDetails = (state = [], action) => { 
  switch (action.type) {
    case 'SET_DETAILS':
      return action.payload;
    default:
      return state;
  }
}
// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieDetails
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
