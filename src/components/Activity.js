import React from "react";

const Activity = ({ type, time, social }) => {
  return (
    <div>
      <h1>{type}</h1>
      <h2>{time}</h2>
      <h2>{social}</h2>
    </div>
  );
};

export default Activity;
