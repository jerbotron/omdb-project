import './style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SearchResults from './SearchResults';
import SearchDetails from './SearchDetails';

import * as SearchFormActions from "../actions";

/*
  Main react component user interacts with:
  - SearchForm composes of the input forms for user to type in a search string
  - SearchDetails contains the popup modal for the details of a selected movie
  - SearchResults contains the HTML to display search results in a 2 column table 
    format
*/
export class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  	event.preventDefault();
  	if (this.input.value) {
  		this.props.loadMovies(this.input.value);
  	} else {
  		alert('Search field cannot be empty!');
  	}
  }

  render() {
    const {movies, selectedMovie, selectMovie} = this.props;
    return (
    	<div className="container">
  			<form className="center-div" onSubmit={this.handleSubmit}>
  				<label>
  					Search titles:
            &nbsp;
  					<input type="text" placeholder="Toy Story 3" ref={(input) => this.input = input} />
  				</label>
          <br />
  				<input type="submit" className="btn-search" value="FIND MY MOVIES!" />
  			</form>
        <SearchDetails selectedMovie={selectedMovie} selectMovie={selectMovie} />
  			<SearchResults movies={movies} selectMovie={selectMovie} />
		  </div>
    );
  }
}

export default connect(
  state => ({movies: state.movies, selectedMovie: state.selectedMovie}),
  dispatch => bindActionCreators(SearchFormActions, dispatch)
)(SearchForm)