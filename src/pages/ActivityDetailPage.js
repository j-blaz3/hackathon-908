import React from "react";
import data from "../seedActivities";
import '../pages/ActivityDetail.css';

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
      length,
      body,
      supplies,
      video,
      title
    } = this.state;

    return (
      <div className="details">
        <div className="banner"></div>
        <div>
          <div className='details-left'>
            <h1 className="details-header">Introduction</h1>
            <p className="details-p">{`${body}`}</p>

            <h4 className="video-tag">Watch the video to learn how to set up & start! →</h4>

            <h1 className="details-header">Supply List:</h1>
            <p className="details-p">{`${supplies}`}</p>

            <h1 className="details-header">Suggested Duration:</h1>
            <p className="details-p">{`${length}`}</p>

            <h5 className="details-title">{`${title}`}</h5>
          </div>
          <div className='details-right'>
            <h1 className="video-header">Techniques & Inspiration Video</h1>
            <iframe className="video-container" width="420" height="315" src={`${video}`}></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityDetailPage;