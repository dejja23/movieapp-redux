import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/navbar';
import MovieCard from './components/moviecard';
import MovieDescrip from './components/moviedescrip';

class App extends Component {
  render() {
    return (
      <Router className="App m-auto ">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MovieCard} />
          <Route
            path={
              this.props.movies.length > 0
                ? `/${this.props.movies[this.props.pathindex].title.replace(
                    / /g,
                    '_'
                  )}`
                : '/'
            }
            render={() => (
              <MovieDescrip movie={this.props.movies[this.props.pathindex]} />
            )}
          />
        </Switch>
        {console.log(this.props.pathindex)}
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return { movies: state.movies, pathindex: state.pathindex };
};

export default connect(mapStateToProps)(App);
