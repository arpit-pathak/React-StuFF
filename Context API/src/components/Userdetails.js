import React, { useContext } from "react";
import { mycontext } from "../App";

const Userdetails = () => {
  const data = useContext(mycontext);
  return (
    <div className="output">
      My Name is <span className="username">{data.name}</span>
    </div>
  );
};

export default Userdetails;
