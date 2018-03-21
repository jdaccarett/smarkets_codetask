import { FETCH_SELECTED_EVENT } from "../actions/types";

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_SELECTED_EVENT:
      return action.payload;
    default:
      return state;
  }
}
