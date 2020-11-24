import React from "react";
import Activity from "./components/Activity";
import "./style.css";

class App extends React.Component {
  state = {
    type: "Type of Activity",
    time: "Length of Time for Activities",
    social: "Is it a social activity?",
  };
  render() {
    return (
      <div>
        <h1>Hackathon 908!</h1>
        <Activity
          type={this.state.type}
          time={this.state.time}
          social={this.state.social}
        />
      </div>
    );
  }
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hackathon 908!"),
  //   React.createElement(Activity, {
  //     type: "Type of Activity",
  //     time: "Length of Time for Activities",
  //     social: "Is it a social activity?",
  //   })
  // );
}

export default App;
