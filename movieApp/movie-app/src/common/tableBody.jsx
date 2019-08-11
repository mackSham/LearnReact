import React, { Component } from "react";

import _ from "lodash";
class TableBody extends Component {
  state = {};
  renderCell = (movie, column) => {
    if (column.content) {
      return column.content(movie);
    } else {
      return _.get(movie, column.path);
    }
  };
  render() {
    const { movies, columns } = this.props;

    return (
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            {columns.map(column => (
              <td key={movie._id + (column.path || column.key)}>
                {this.renderCell(movie, column)}
              </td>
            ))}
            {/* <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onLike={() => onLike(movie._id)} />
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(movie._id)}
              >
                Delete
              </button>
            </td> */}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
