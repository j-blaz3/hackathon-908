import React from "react";
import data from "../seedActivities";

class ActivityDetailPage extends React.Component {
  state = { loading: true };
  componentDidMount() {
    // const activityId = this.props.match.params.activityId;
    this.setState({
      activity: data.activity,
    });
  }
  render() {
    const { activity } = this.state;

    return (
      <div className="details">
        <div className="banner"></div>
        <div classsName="row">
          <div className="col">{`${activity}`}</div>
          <div className="col">{``}</div>
        </div>
        <div className="row">{``}</div>
      </div>
    );
  }
}

export default ActivityDetailPage;
