import React from 'react';

export default function SearchResults({movies}) {
    return movies.Search ? displaySearchResults(movies.Search) : null;
}

function displaySearchResults(movies) {
    console.log("displaying results");
    return (
        <div>
            <h3 className="results-title">Results:</h3>
            {movies.map((movie, index) => (
                <div className="col-md-6 center-div" key={index}>
                    <a className="btn-result">
                        {movie.Title} ({movie.Year})
                    </a>
                </div>
            ))}
        </div>
    );
}