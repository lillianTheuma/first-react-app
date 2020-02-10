import React from "react";
import PropTypes from "prop-types";
import NewPost from "./NewPost";

function PostColumn(props){
  return (
    <div className="card">
      <div className="card-header">
        <NewPost/>
      </div>

    </div>
  );
}

export default PostColumn;
