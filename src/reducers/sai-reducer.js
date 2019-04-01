/*
import { EVENT_SELECTOR, SAI_EDIT } from "../actions/sai-action-types";
import { combineReducers } from "redux";

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

const BaseSaiReducer = action => {
  return base_sai_script;
};

const CurrentSaiReducer = (sai_script = base_sai_script, action) => {
  let new_sai_script = sai_script;

  switch (action.type) {
    case SAI_EDIT: {
      new_sai_script.event_type += 1;

      console.log(new_sai_script);
      return base_sai_script;
    }
    default:
      return new_sai_script;
  }
};

export default combineReducers({
  base_sai: BaseSaiReducer,
  current_sai: CurrentSaiReducer
});
*/
