import React from "react";
import Activity from "./components/Activity";
import "./style.css";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hackathon 908!"),
    React.createElement(Activity, {
      type: "Type of Activity",
      time: "Length of Time for Activities",
      social: "Is it a social activity?",
    })
  );
};

export default App;
