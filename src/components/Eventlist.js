import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopEvents } from "../actions";
import EventItem from "./EventItem";

class Eventlist extends Component {
  //lifecylce method (instance component is rendered on screen fetch top events)
  componentDidMount() {
    //call action creator to fecth all top events.
    this.props.fetchTopEvents();
  }

  renderEvents() {
    return this.props.top_events.map((events, i) => {
      return <EventItem events={events} key={i} />;
    });
  }

  render() {
    return <div className={"eventList"}>{this.renderEvents()}</div>;
  }
}

//wire up to redux.
function mapStateToProps(state) {
  return { top_events: state.top_events };
}

export default connect(mapStateToProps, { fetchTopEvents })(Eventlist);
