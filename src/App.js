import React from "react";
import { Switch, Route } from "react-router-dom";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import Navbar from "./components/Navbar";

import "./style.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
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
