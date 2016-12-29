import React from 'react';
import ReactModal from 'react-modal';

/*
  params:
  @selectedMovie: currently selected movie to view details for, null if no movies selected
  @selectMovie: function used to update SearchForm state, set selectedMovie state to null 
                if user closes movie details modal
*/
export default function SearchDetails({selectedMovie, selectMovie}) {
  return (
    <ReactModal isOpen={selectedMovie!=null} contentLabel="show movie details">
      <button className="btn-close-modal" onClick={selectMovie.bind(this, null)}>
        <img src='./btn-close.png' alt="X" width="48" height="48"/>
      </button>
      {selectedMovie ? displaySearchDetails(selectedMovie) : null}
    </ReactModal>
  );
}

function displaySearchDetails(selectedMovie) {
  return (
    <div className="col-md-10 col-md-offset-1">
      <div className="col-md-4 center-div">
        <img src={selectedMovie.Poster}/>
      </div>
      <div className="col-md-6">
        <h3>Title: {selectedMovie.Title}</h3>
        <p> Rated: {selectedMovie.Rated} </p>
        <p> Plot: {selectedMovie.Plot} </p>
        <p> Released: {selectedMovie.Released} </p>
        <p> Runtime: {selectedMovie.Runtime} </p>
        <p> Genre: {selectedMovie.Genre} </p>
        <p> Director: {selectedMovie.Director} </p>
        <p> Writer: {selectedMovie.Writer} </p>
        <p> Language: {selectedMovie.Language} </p>
        <p> Awards: {selectedMovie.Awards} </p>
        <p> IMDb Rating: {selectedMovie.imdbRating} </p>
      </div>
    </div>
  );
}
