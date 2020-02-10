import React from "react";
import PropTypes from "prop-types";

function UserHeader(props){
  return (
    <div className="card">
    <div className="card-header">
    <h1>{props.name}</h1>
    </div>
    <div className="card-body">
    <p> Other user info </p>
    </div>
    </div>
  );
}
UserHeader.propTypes = {
  name: PropTypes.string.isRequired
}
export default UserHeader;
