import React from "react";

class ActivityDetailPage extends React.Component {
  state = {};

  componentDidMount() {
    this.setState({
      type: "reading",
      duration: 2,
      social: "1 player",
    });
  }
  render() {
    const { type, duration, social } = this.state;

    return (
      <div className="details">
        <h1>ActivityDetailPage</h1>
        <h2>{`${type} - ${duration} - ${social}`}</h2>
      </div>
    );
  }
}

export default ActivityDetailPage;
