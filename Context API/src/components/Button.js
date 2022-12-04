import React, { useContext } from "react";
import { mycontext } from "../App";

const Button = () => {
  const data = useContext(mycontext);
  return (
    <div className="output" style={{ backgroundColor: data.color }}>
      COLOR CHANGER
    </div>
  );
};

export default Button;
