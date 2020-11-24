/* eslint-disable import/default */
import React from "react";
import Activity from "./components/Activity/Activity";
import seedActivities from "./seedActivities";
import "./style.css";

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = seedActivities;
    this.setState({data: data})
  }
  render() {
    return (
      <div>
        <Activity data={this.state.data} />
      </div>
    );
  }
}

export default App;
