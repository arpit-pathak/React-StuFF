import React from "react";
import "../App.css";
const Card = ({ details }) => {
  return (
    <div>
      <div className="card">
        <div className="image">
          <img src={details.picture?.large} alt="" />
        </div>
        <div className="line">Name : {details.name?.first}</div>
        <div className="line">Surname : {details.name?.last}</div>
        <div className="line">Gender : {details.gender}</div>
        <div className="line">Age : {details.dob?.age}</div>
        <div className="line">Phone : {details.phone}</div>
      </div>
    </div>
  );
};

export default Card;
