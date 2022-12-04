import React from "react";

const Userdetails = (props) => {
  return (
    <div className="output">
      My Name is <span className="username">{props.username}</span>
    </div>
  );
};

export default Userdetails;
