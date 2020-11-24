import React from "react";
import "./Activity.css";

class Activity extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    return this.setState({ loading: false });
  }

  render() {
    const data = this.props.data;
    if (this.state.loading) {
      return (
        <div className="container-fluid">
          <h2>Loading ...</h2>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col">
              <h3>Go to</h3>
            </div>
            <div className="col">
              <h3>For</h3>
            </div>
            <div className="col">
              <h3>With</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">{
              data.map(item => {
                return <li key={item.activity}>{item.activity}</li>
              })
            }</div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row justify-content-center">
            <button className="btn">Give me a random activity</button>
          </div>
        </div>
      );
    }
  }
}

export default Activity;
