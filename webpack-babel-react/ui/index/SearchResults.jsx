import React from 'react';

/*
  params:
  @movies: list of resulting movies after search, empty if search returned no results
  @selectMovie: function used to update SearchForm component 
*/
export default function SearchResults({movies, selectMovie}) {
  return movies.Search ? displaySearchResults({movies, selectMovie}) : null;
}

function displaySearchResults({movies, selectMovie}) {
  return (
    <div>
      <h3 className="results-title">Results:</h3>
      {movies.Search.map((movie, index) => (
        <div className="col-md-6 center-div" key={index}>
          <a className="btn-movie" onClick={selectMovie.bind(this, movie.imdbID)}>
            {movie.Title} ({movie.Year})
          </a>
        </div>
      ))}
    </div>
  );
}