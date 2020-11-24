import React from "react";
import { Link } from 'react-router-dom';
import "./Activity.css";

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activity: {}
    };
    this.activityRef = React.createRef();
    this.timeRef = React.createRef();
    this.groupRef = React.createRef();

    this.ticketRef = React.createRef();
    this.titleRef = React.createRef();
    this.bodyRef = React.createRef();
    this.supListRef = React.createRef();
    this.groupTypeRef = React.createRef();
    this.ticketTimeRef = React.createRef();

  }

  componentDidMount() {
    const data = this.props.data;
    let shuffledArr = data.sort(() => Math.random() - 0.5);
    return this.setState({ loading: false, activity: shuffledArr[0] });
  }

  handleActivityGenerator = () => {
    
    const time = this.timeRef.current;
    const group = this.groupRef.current;
    const ticket = this.ticketRef.current;
    activity.classList.remove("hidden");
    time.classList.remove("hidden");
    group.classList.remove("hidden");
    ticket.classList.remove("hidden");
    this.activityRef.current.innerHTML = this.state.activity.activity;
    this.timeRef.current.innerText = this.state.activity.length;
    this.groupRef.current.innerText = this.state.activity.people;
    this.titleRef.current.innerText = this.state.activity.title;
    this.bodyRef.current.innerText = this.state.activity.body;
    this.supListRef.current.innerText = this.state.activity.supplies;
    this.groupTypeRef.current.innerText = this.state.activity.group;
    this.ticketTimeRef.current.innerText = this.state.activity.length;
  };

  render() {
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
            <div ref={this.ticketRef} className="activity-ticket hidden text-center p-3">
              <h5 ref={this.titleRef} className="p-2"></h5>
              <p ref={this.bodyRef} className="ticket-text-body mb-4"></p>
              <p className="ticket-text-bold">Supplies:</p>
              <p ref={this.supListRef} className="ticket-text-medium mb-4"></p>
              <p className="ticket-text-bold">Group Type:</p>
              <p ref={this.groupTypeRef} className="ticket-text-medium mb-4"></p>
              <p className="ticket-text-bold">Time Duration:</p>
              <p ref={this.ticketTimeRef} className="ticket-text-medium"></p>
              <Link to={`/activity/${this.state.activity.id}`} className="btn m-4 accept-btn">Accept</Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Activity;
