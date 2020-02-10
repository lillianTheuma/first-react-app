import React from "react";
import UserHeader from "./UserHeader";
import UserBio from "./UserBio";
import PropTypes from "prop-types";

function User(props){
  return (
    <div>
    <UserHeader
      name={props.name}
    />
    <UserBio
    biography={props.biography}
    />
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired
};
export default User;
