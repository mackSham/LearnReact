import React, { Component } from "react";

class ListGenre extends Component {
  state = {};
  render() {
    return (
      <ul className="list-group">
        <li
          className={
            this.props.genreName === "All Movies"
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => this.props.onGenreChange("All Movies")}
          style={{ cursor: "pointer" }}
        >
          All Movies{" "}
        </li>
        {this.props.genreList.map(genre => (
          <li
            key={genre._id}
            className={
              genre.name === this.props.genreName
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => this.props.onGenreChange(genre.name)}
            style={{ cursor: "pointer" }}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGenre;
