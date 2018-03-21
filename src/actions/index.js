import axios from "axios";
import { FETCH_TOP_EVENTS, FETCH_SELECTED_EVENT } from "./types";

export const fetchTopEvents = () => {
  // dispatch action until api request is completed.
  return function(dispatch) {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/"
      )
      .then(res =>
        dispatch({ type: FETCH_TOP_EVENTS, payload: res.data.results })
      );
  };
};

export const fetchSelectedEvent = id => {
  // dispatch action until api request is completed.
  return function(dispatch) {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/id/" +
          id +
          "/"
      )
      .then(res =>
        dispatch({
          type: FETCH_SELECTED_EVENT,
          payload: {
            id: res.data.event.id,
            name: res.data.event.name,
            leauge: res.data.event.parent_name,
            start_datetime: res.data.event.start_datetime
          }
        })
      );
  };
};
