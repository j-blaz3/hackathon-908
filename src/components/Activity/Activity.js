import React from "react";
import "./Activity.css";

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.activityRef = React.createRef();
    this.timeRef = React.createRef();
    this.groupRef = React.createRef();
  }

  componentDidMount() {
    return this.setState({ loading: false });
  }

  handleActivityGenerator = () => {
    const data = this.props.data;
    let shuffledArr = data.sort(() => Math.random() - 0.5);
    const activity = this.activityRef.current;
    const time = this.timeRef.current;
    const group = this.groupRef.current;
    activity.classList.remove("hidden");
    time.classList.remove("hidden");
    group.classList.remove("hidden");
    this.activityRef.current.innerHTML = shuffledArr[0].activity;
    this.timeRef.current.innerText = shuffledArr[0].length;
    this.groupRef.current.innerText = shuffledArr[0].people;
    console.log(this.groupRef);
  };

  render() {
    // const data = this.props.data;
    if (this.state.loading) {
      return (
        <div className="container-fluid">
          <h2>Loading ...</h2>
        </div>
      );
    } else {
      return (
        <div className="activity-body">
          <div className="bubble"></div>
          <div className="slot-machine">
            <div className="row slot-upper-row">
              <div className="col-5 p-0">
                <h3>Go</h3>
              </div>
              <div className="col-3 p-0">
                <h3>For</h3>
              </div>
              <div className="col-4 p-0">
                <h3>With</h3>
              </div>
            </div>
            <div className="row slot-lower-row">
              <div className="col-5 p-0">
                <div className="slot-text-container">
                  <p
                    ref={this.activityRef}
                    className="hidden activity-text"
                  ></p>
                </div>
              </div>
              <div className="col-3 p-0">
                <div className="slot-text-container">
                  <p ref={this.timeRef} className="hidden activity-text"></p>
                </div>
              </div>
              <div className="col-4 p-0">
                <div className="slot-text-container">
                  <p ref={this.groupRef} className="hidden activity-text"></p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center slot-btn-row">
              <button
                onClick={this.handleActivityGenerator}
                className="btn activity-btn"
              >
                Give me a random activity
              </button>
            </div>
            <div className="activity-ticket text-center p-3">
              <h5 className="p-2">Time To Release Your Inner Artist!</h5>
              <p className="ticket-text-body">
                Spend an afternoon indulging your creativity & exploring your
                ideas with the free-flowing medium of watercolor.
              </p>
              <p className="ticket-text-bold">Supplies:</p>
              <p className="ticket-text-medium">Paints, Paper, Palette, Brushes + 4 Items</p>
              <p className="ticket-text-bold">Group Type:</p>
              <p className="ticket-text-medium">Solo</p>
              <p className="ticket-text-bold">Time Duration:</p>
              <p className="ticket-text-medium">2 Hours</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Activity;
