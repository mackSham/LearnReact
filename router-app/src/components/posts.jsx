import React from "react";
import queryString from "query-string";
const Posts = ({ location }) => {
  const result = queryString.parse(location.search);
  console.log(result);
  location.search;
  return (
    <div>
      <h1>Posts</h1>
      Year: , Month:
    </div>
  );
};

export default Posts;
