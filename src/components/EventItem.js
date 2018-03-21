//TableNew shows TableForm and TableFormReview
import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { fetchSelectedEvent } from "../actions";

class EventItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayData: false
    };

    this.displayNewPage = this.displayNewPage.bind(this);
  }

  //Toggle State of displayData (true of false) When event is clicked. If true Redirect to display event info Component.
  displayNewPage() {
    //pass current id to make api get request of selected event.
    this.props.fetchSelectedEvent(this.props.events.id);
    this.setState(state => ({
      displayData: !state.displayData
    }));
  }

  render() {
    console.log(this.props.events);
    //if Event is clicked Redirect to new page and render selected event Component with props passed.
    if (
      this.state.displayData &&
      this.props.curr_event.id === this.props.events.id
    ) {
      return (
        <Redirect
          to={{
            pathname: "/events",
            state: {
              referrer: {
                name: this.props.curr_event.name,
                leauge: this.props.curr_event.leauge,
                start_datetime: this.props.curr_event.start_datetime
              }
            }
          }}
        />
      );
    }
    // if Event is not clicked display event only.
    return (
      <div className="eventList__item">
        <div className="eventList__item-eventName">
          <span>{this.props.events.name}</span>
        </div>
        <div className="eventList__itemCont-one">
          <div className="eventList__item-id">ID: {this.props.events.id}</div>
              <div className="eventList__item-league">
            Leauge: {this.props.events.parent_name}
          </div>
        </div>
        <div className="eventList__itemCont-two">
          <a
            onClick={this.displayNewPage}
            className="btn btn--white btn--animated"
          >
            Get Info
          </a>
        </div>
      </div>
    );
  }
}

//wire up to redux.
function mapStateToProps(state) {
  return { curr_event: state.curr_event };
}

export default connect(mapStateToProps, { fetchSelectedEvent })(EventItem);
