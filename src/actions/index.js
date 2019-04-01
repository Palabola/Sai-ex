// Action Creator
export const selectEvent = event => {
  // Return an action
  return {
    type: "EVENT_SELECTED",
    payload: event
  };
};

export const SaiEditField = (field, value) => {
  // Return an action
  return {
    type: "SAI_EDIT_FIELD",
    payload: { field, value }
  };
};
