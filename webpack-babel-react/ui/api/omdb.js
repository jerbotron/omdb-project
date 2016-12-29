/*
	Methods related to fetching movie data at the OMdB endpoints 
*/

export const fetchSearchResults = (searchText) => {
	const API_SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=' + searchText;
	return fetch(API_SEARCH_ENDPOINT).then(function (response) {
  	return response.json().then(function (json) {
  		return json;
  	})
  })
};

export const fetchMovieDetails = (movieId) => {
	const API_DETAILS_ENDPOINT = 'http://www.omdbapi.com/?i=' + movieId + '&plot=full&r=json';
	return fetch(API_DETAILS_ENDPOINT).then(function (response) {
  	return response.json().then(function (json) {
  		return json;
  	})
  })
};