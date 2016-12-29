export default function reducer(state = {movies: []}, action) {
  switch (action.type) {
  	case 'LOAD_MOVIES':
  		return {...state, searchText: action.searchText};
    case 'MOVIES_RECEIVED':
      return {...state, movies: action.movies};
    case 'DETAILS_RECEIVED':
      return {...state, selectedMovie: action.selectedMovie};
    case 'LOAD_FAILURE':
    default: 
    	return state;
  }
}
