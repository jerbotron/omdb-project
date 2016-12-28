export default function reducer(state = {movies: []}, action) {
  console.log(action);
  switch (action.type) {
  	case 'MOVIES_RECEIVED':
      console.log(JSON.stringify(action.movies));
        return {...state, movies: action.movies};
  	case 'LOAD_MOVIES_FAILURE':
  		return state;
  	case 'SELECT_MOVIE':
  		return {...state, selectedMovie: action.movie};
  	case 'LOAD_MOVIES':
      console.log("reducer loading movies");
  		return {...state, value: action.value};
    default: 
    	return state;
  }
}
