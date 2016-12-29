import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { fetchSearchResults, fetchMovieDetails } from './api/omdb';

/*
	Generator used to watch user requests to load movies based on search text or
	to load movie details when a movie is selected
*/
export function* watchLoadRequests() {
  yield [
  	takeEvery('LOAD_MOVIES', loadMovies),
  	takeEvery('SELECT_MOVIE', loadMovieDetails)
  ]
}

/*
	Generator used to load movies based on searchText
*/
export function* loadMovies(action) {
  try {
  	const movies = yield call(fetchSearchResults, action.searchText);
    yield put({type: 'MOVIES_RECEIVED', movies});
  } catch (error) {
    yield put({type: 'LOAD_FAILURE', error});
  }
}

/*
	Generator used to load movie details based on selectedMovie's imdbID
*/
export function* loadMovieDetails(action) {
  try {
  	var selectedMovie = null;
  	if (action.movieId) {
			selectedMovie = yield call(fetchMovieDetails, action.movieId);
		} 
		yield put({type: 'DETAILS_RECEIVED', selectedMovie});
  } catch (error) {
    yield put({type: 'LOAD_FAILURE', error});
  }
}



