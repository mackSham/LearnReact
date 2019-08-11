import React, { Component } from "react";

class TableHeader extends Component {
  rasieSort = title => {
    let sortColumn;
    if (
      this.props.sortColumn.path === title &&
      this.props.sortColumn.order === "asc"
    ) {
      sortColumn = { path: title, order: "desc" };
    } else if (
      this.props.sortColumn.path === title &&
      this.props.sortColumn.order === "desc"
    ) {
      sortColumn = { path: title, order: "asc" };
    } else {
      sortColumn = { path: title, order: "asc" };
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    if (column.path !== this.props.sortColumn.path) return null;

    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" />;

    return <i className="fa fa-sort-desc" />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.rasieSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
