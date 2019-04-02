// Edit Current Sai Field & Value
export const SaiEditField = (field, value) => {
  // Return an action
  return {
    type: "SAI_EDIT_FIELD",
    payload: { field, value }
  };
};
