import React from "react";

const Activity = (props) => {
  return (
    <div>
      <h1>Hackathon 908!</h1>
      <h1>{props.type}</h1>
      <h2>{props.time}</h2>
      <h2>{props.social}</h2>
    </div>
  );
};

export default Activity;
