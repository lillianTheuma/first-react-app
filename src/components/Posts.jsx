import React from "react";

import PropTypes from "prop-types";

function Posts(props){
  return (
    <div>
    <PostsHeader
      name={props.name}
    />
    <PostsBio
    biography={props.biography}
    />
    </div>
  );
}
export default Posts;
