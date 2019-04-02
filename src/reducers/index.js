import { combineReducers } from "redux";

// Always every Reducer being called!

const base_sai_script = {
  entryorguid: 0,
  source_type: 0,
  id: 0,
  link: 0,
  event_type: 0,
  event_phase_mask: 0,
  event_chance: 100,
  event_flags: 0,
  event_param1: 0,
  event_param2: 0,
  event_param3: 0,
  event_param4: 0,
  event_param_string: "",
  action_type: 0,
  action_param1: 0,
  action_param2: 0,
  action_param3: 0,
  action_param4: 0,
  action_param5: 0,
  action_param6: 0,
  target_type: 0,
  target_param1: 0,
  target_param2: 0,
  target_param3: 0,
  target_x: 0,
  target_y: 0,
  target_z: 0,
  target_o: 0,
  comment: null
};

const CurrentSaiReducer = (sai = base_sai_script, action) => {
  let new_sai = sai;

  if (action.type === "SAI_EDIT_FIELD") {
    new_sai[action.payload.field] = action.payload.value;
    //return action.payload;
  }

  return new_sai;
};

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

  return selectedEvent;
};

export default combineReducers({
  currentSai: CurrentSaiReducer,
  songs: songsReducer,
  selectedEvent: SelectedEventReducer
});
