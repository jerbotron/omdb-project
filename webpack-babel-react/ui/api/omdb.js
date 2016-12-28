const API_KEY = 'b5efd2e8';
const API_SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=';
const API_DETAILS_ENDPOINT = 'http://www.omdbapi.com/?i={MOVIE_ID}&plot=full&r=json';

export const fetchSearchResults = (searchText) => {
	var searchURL = API_SEARCH_ENDPOINT + searchText;
  	return fetch(searchURL).then(function (response) {
    	return response.json().then(function (json) {
    		console.log(json);
    		return json;
    	})
  	})
};