import React, { Component } from "react";
class Pagination extends Component {
  state = {};
  render() {
    let pageSize = this.props.pageSize; //number of movies want to show in one page
    let itemCount = this.props.itemCount; //number of Movies
    let numberOfPages = Math.ceil(itemCount / pageSize);
    if (numberOfPages === 1) {
      return null;
    }
    let pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      pages.push(i + 1);
    }
    return (
      <ul className="pagination">
        {pages.map(c => (
          <li
            key={c}
            className={
              this.props.pageNumber === c ? "page-item active" : "page-item"
            }
          >
            <a
              href="#"
              className="page-link"
              onClick={() => this.props.onPageChange(c)}
            >
              {c}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
export default Pagination;
