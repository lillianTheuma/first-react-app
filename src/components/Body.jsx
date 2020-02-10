import React from "react";
import User from "./user";
import PostColumn from "./PostColumn";
function Body(){
  return (
    <div className="row">
      <div className="col-4">
        <User
        name="Kellie A. Corrigan"
        biography="lorem ipsum dolor sit amet, consecetur adipsicing elit."
        />
      </div>
      <div className="col-4">
        <PostColumn/>
      </div>
      <div className="col-4">
        <p> suggested users or something go here </p>
      </div>
    </div>
  );
}

export default Body;
