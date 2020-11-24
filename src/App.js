/* eslint-disable import/default */
import React from "react";
// import Activity from "./components/Activity/Activity";
import { Switch, Route } from "react-router-dom";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import Navbar from "./components/Navbar";
import seedActivities from "./seedActivities";
import "./style.css";

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = seedActivities;
    this.setState({ data: data });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid p-0">
          {/* <Activity data={this.state.data} /> */}
          <Switch>
            <Route
              path="/activity/:activityId"
              component={ActivityDetailPage}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
