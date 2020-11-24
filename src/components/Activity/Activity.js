import React from "react";
import "./Activity.css";

class Activity extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  

  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col">
            <h3>Go to</h3>
          </div>
          <div className="col">
            <h3>For</h3>
          </div>
          <div className="col">
            <h3>With</h3>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row justify-content-center">
          <button className="btn">Give me a random activity</button>
        </div>
      </div>
    );
  }
}

export default Activity;
