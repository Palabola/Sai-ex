import { combineReducers } from "redux";

import SaiEnums from "../enums/sai-enums";

// Always every Reducer being called!

const base_sai_script = SaiEnums.base_sai_script;

const CurrentSaiReducer = (sai = base_sai_script, action) => {
  let new_sai = sai;

  if (action.type === "SAI_EDIT_FIELD") {
    new_sai[action.payload.field] = action.payload.value;
    //return action.payload;
  }

  return new_sai;
};

// TODO: Find out why this is needed!
const nothing = () => {
  return [];
};

export default combineReducers({
  currentSai: CurrentSaiReducer,
  nothing: nothing /*
  selectedEvent: SelectedEventReducer*/
});
