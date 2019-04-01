import { combineReducers } from "redux";

// Always every Reducer being called!

const songsReducer = () => {
  return [
    { title: "song 1", duration: "4:05" },
    { title: "song 2", duration: "3:05" },
    { title: "song 3", duration: "2:05" },
    { title: "song 4", duration: "1:05" }
  ];
};

const SelectedEventReducer = (selectedEvent = null, action) => {
  if (action.type === "EVENT_SELECTED") {
    return action.payload;
  }

  if (action.type === "SAI_EDIT_FIELD") {
    return action.payload;
  }

  return selectedEvent;
};

export default combineReducers({
  songs: songsReducer,
  selectedEvent: SelectedEventReducer
});
