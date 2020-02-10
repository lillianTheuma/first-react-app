import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <div>
    <PostHeader
      name={props.name}
    />
    <PostBio
    biography={props.biography}
    />
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired
};
export default Post;
