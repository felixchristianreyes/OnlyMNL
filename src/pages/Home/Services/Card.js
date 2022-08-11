import React from "react";

const Card = ({ title, icon, description }) => {
  return (
    <div className="col-xl-3 col-md-6 d-flex align-items-stretch">
      <div className="icon-box">
        <div className="icon text-center">
          <div className="cardIcon">{icon}</div>
        </div>
        <h4 className="text-center pt-4">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
