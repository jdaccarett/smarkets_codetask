import React, { Component } from "react";
import { Link } from "react-router-dom";

class EventSelected extends Component {
  render() {
    return (
      <div className="eventList">
        <div className="eventList__item">
                    <div className="eventList__item-eventName">
            <span>{this.props.location.state.referrer.name}</span>
          </div>
          <div className="eventList__itemCont-one">
            <div className="eventList__item-id">
              Start Time:{" "}
              {Date(this.props.location.state.referrer.start_datetime)}
            </div>
                      <div className="eventList__item-league">
              Leauge: {this.props.location.state.referrer.leauge}
            </div>
          </div>
          <div className="eventList__itemCont-two">
            <Link className="btn btn--white btn--animated" to="/">
              &#8592; Top Events
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EventSelected;
