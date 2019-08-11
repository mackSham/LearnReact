import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import Like from "../common/like";
class Table extends Component {
  state = {};
  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
    let columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: movie => (
          <Like
            liked={movie.liked}
            onLike={() => this.props.onLike(movie._id)}
          />
        )
      },
      {
        key: "delete",
        content: movie => (
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(movie._id)}
          >
            Delete
          </button>
        )
      }
    ];
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody
          movies={movies}
          onDelete={onDelete}
          onLike={onLike}
          columns={columns}
        />
      </table>
    );
  }
}

export default Table;
