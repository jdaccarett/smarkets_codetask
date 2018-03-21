import { FETCH_TOP_EVENTS } from "../actions/types";

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_TOP_EVENTS:
      return action.payload;
    default:
      return state;
  }
}
