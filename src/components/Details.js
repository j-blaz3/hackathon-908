import React from "react";
import data from "../seedActivities";

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    data.activity();
  }
  render() {
    return (
      <div>
        <h1>Detail Page</h1>
      </div>
    );
  }
}

export default Details;
