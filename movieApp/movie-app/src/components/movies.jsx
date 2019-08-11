import React, { Component } from "react";
import Pagination from "../common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/pagination";
import ListGenre from "../common/listGenre";
import MoviesTable from "./moviesTable";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    pageNumber: 1,
    genreName: "All Movies",
    genres: getGenres(),
    sortColumn: {
      path: "title",
      order: "asc"
    }
  };
  handleDelete = id => {
    let movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ pageNumber: page });
    //console.log(page);
  };
  handleGenreChange = genreName => {
    //console.log(genreName);
    this.setState({ pageNumber: 1 });
    this.setState({ genreName: genreName });
  };
  handleLike = id => {
    //console.log("Hello");
    let movies = this.state.movies.map(movie => {
      if (movie.liked === true && movie._id === id) {
        movie.liked = false;
      } else if (movie._id === id) {
        movie.liked = true;
      }
      return movie;
    });
    this.setState({ movies });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    ///const count = this.state.movies.length;
    let currentCount,
      filtered = [];
    if (this.state.genreName !== "All Movies") {
      filtered = this.state.movies.filter(
        movie => this.state.genreName === movie.genre.name
      );
      currentCount = filtered.length;
    } else {
      filtered = this.state.movies;
      currentCount = this.state.movies.length;
    }

    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    let movies = paginate(sorted, this.state.pageNumber, this.state.pageSize);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4">
            <ListGenre
              genreList={this.state.genres}
              genreName={this.state.genreName}
              onGenreChange={this.handleGenreChange}
            />
          </div>
          <div className="col-lg-8">
            {currentCount === 0 ? (
              <p>There is no movie in the Database</p>
            ) : (
              <p>Showing {currentCount} movies in the Database</p>
            )}

            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />
            <Pagination
              itemCount={currentCount}
              pageSize={this.state.pageSize}
              pageNumber={this.state.pageNumber}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
