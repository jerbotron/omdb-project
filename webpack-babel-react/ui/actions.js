const LOAD_MOVIES		= 'LOAD_MOVIES';
const SELECT_MOVIE 	= 'SELECT_MOVIE';

export function loadMovies(searchText) {
  return {
    type: LOAD_MOVIES,
    searchText
  }
}

export function selectMovie(movieId) {
  return {
    type: SELECT_MOVIE,
    movieId
  }
}