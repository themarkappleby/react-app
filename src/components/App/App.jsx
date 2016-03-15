import React, {Component} from 'react';
import {connect} from 'react-redux';

// components
import MovieList from '../MovieList/MovieList.jsx';
import MovieDetails from '../MovieDetails/MovieDetails.jsx';
import MovieForm from '../MovieForm/MovieForm.jsx';

const URL = '/assets/movies.json';

const mapStateToProps = state => {
  return {
    movies: state.movies,
    selectedMovie: state.movies.find(movie => movie.id === state.selectedMovieId)
  };
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="combo">

          <div className="combo-first">
            <MovieList movies={this.props.movies} />
          </div>

          <div className="combo-last">
            <MovieDetails movie={this.props.selectedMovie} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
