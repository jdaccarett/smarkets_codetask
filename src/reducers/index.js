import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import displayInfoReducer from "./displayInfoReducer";

export default combineReducers({
  top_events: eventsReducer,
  curr_event: displayInfoReducer
});
