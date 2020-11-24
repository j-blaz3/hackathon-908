import React from "react";
import data from "../seedActivities";

class ActivityDetailPage extends React.Component {
  state = { activity: {}, loading: true };
  componentDidMount() {
    const activityId = this.props.match.params.activityId;
    this.setState({
      activity: data[activityId].activity,
      category: data[activityId].category,
      outdoorIndoor: data[activityId].outdoorIndoor,
      length: data[activityId].length,
      people: data[activityId].people,
      title: data[activityId].title,
      body: data[activityId].body,
      supplies: data[activityId].supplies,
      group: data[activityId].group,
      video: data[activityId].video,
    });
  }

  render() {
    const {
      activity,
      category,
      outdoorIndoor,
      length,
      people,
      title,
      body,
      supplies,
      group,
      video,
    } = this.state;

    return (
      <div className="details">
        <div className="banner"></div>
        <div classsName="row">
          <div className="col">{`${activity}: ${category}`}</div>
          <div className="col">{`${outdoorIndoor} - ${length}`}</div>
          <div className="col">{`${people} - ${title}`}</div>
          <div className="col">{`${body} - ${supplies} - ${group}`}</div>
        </div>
        <div className="row">
          <iframe width="420" height="315" src={`${video}`}></iframe>
        </div>
      </div>
    );
  }
}

export default ActivityDetailPage;
