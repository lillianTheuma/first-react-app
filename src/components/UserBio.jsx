import React from "react";
import PropTypes from "prop-types";

function UserBio(props){
  return (
    <div className="card">
    <div className="card-body">
    <p>{props.biography}</p>
    </div>
    </div>
  );
}

UserBio.propTypes = {
  biography: PropTypes.string.isRequired
};
export default UserBio;
