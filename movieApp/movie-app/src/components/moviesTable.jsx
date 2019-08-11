import React, { Component } from "react";

import Table from "../common/table";
class MoviesTable extends Component {
  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
    return (
      <Table
        movies={movies}
        onDelete={onDelete}
        onLike={onLike}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
