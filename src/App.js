/* eslint-disable import/default */
import React from "react";
import { Switch, Route } from 'react-router-dom';
import Activity from "./components/Activity/Activity";
import ActivityDetailPage from "./pages/ActivityDetailPage";
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
      <div className="container-fluid p-0">
        <Switch>
        <Route exact path='/'>
          <Activity data={this.state.data} />
        </Route>
        <Route path='/activity/:activityId' component={ ActivityDetailPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
