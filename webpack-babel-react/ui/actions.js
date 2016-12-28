const LOAD_MOVIES = 'LOAD_MOVIES';
const SELECT_MOVIE = 'SELECT_MOVIE';

export function selectMovie(movie) {
  return {
    type: SELECT_MOVIE,
    movie
  }
}

export function loadMovies(value) {
  console.log("loading movies");
  return {
    type: LOAD_MOVIES,
    value: value
  }
}