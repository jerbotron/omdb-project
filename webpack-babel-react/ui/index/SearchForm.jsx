import './style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SearchResults from './SearchResults';

import * as SearchFormActions from "../actions";

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
    const {movies} = this.props;
    console.log(movies);
    return (
    	<div className="container">
  			<form className="center-div" onSubmit={this.handleSubmit}>
  				<label>
  					Search titles:
  					<input type="text" placeholder="Toy Story 3" ref={(input) => this.input = input} />
  				</label>
  				<input type="submit" value="FIND MY MOVIES!" />
  			</form>
  			<SearchResults movies={movies}/>
		</div>
    );
  }
}

export default connect(
  state => ({movies: state.movies}),
  dispatch => bindActionCreators(SearchFormActions, dispatch)
)(SearchForm)