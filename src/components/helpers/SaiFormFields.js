import SaiEnums from "../../enums/sai-enums";

const Lables = SaiEnums.saiLabels;

function labelchecker(field_name) {
  if (typeof field_name === "undefined") return "Unused";

  return field_name;
}

export const FormFieldsCreator = (form_type, id) => {
  let Formfields = [];

  switch (form_type) {
    case "event_type":
      Formfields = EventForms(id);
      break;
    case "action_type":
      Formfields = ActionForms(id);
      break;
    case "target_type":
      Formfields = TargetForms(id);
      break;

    default:
      Formfields = EventForms(0);
      break;
  }

  return Formfields;
};

export const EventForms = id => {
  return [
    {
      field_name: "event_param1",
      type: "int",
      label_name: labelchecker(Lables.event_type.param1[id])
    },
    {
      field_name: "event_param2",
      type: "int",
      label_name: labelchecker(Lables.event_type.param2[id])
    },
    {
      field_name: "event_param3",
      type: "int",
      label_name: labelchecker(Lables.event_type.param3[id])
    },
    {
      field_name: "event_param4",
      type: "int",
      label_name: labelchecker(Lables.event_type.param4[id])
    },
    {
      field_name: "event_param_string",
      type: "string",
      label_name: "event_param_string"
    }
  ];
};

export const ActionForms = id => {
  return [
    {
      field_name: "action_param1",
      type: "int",
      label_name: labelchecker(Lables.action_type.param1[id])
    },
    {
      field_name: "action_param2",
      type: "int",
      label_name: labelchecker(Lables.action_type.param2[id])
    },
    {
      field_name: "action_param3",
      type: "int",
      label_name: labelchecker(Lables.action_type.param3[id])
    },
    {
      field_name: "action_param4",
      type: "int",
      label_name: labelchecker(Lables.action_type.param4[id])
    },
    {
      field_name: "action_param5",
      type: "int",
      label_name: labelchecker(Lables.action_type.param5[id])
    },
    {
      field_name: "action_param6",
      type: "int",
      label_name: labelchecker(Lables.action_type.param6[id])
    }
  ];
};

export const TargetForms = id => {
  return [
    {
      field_name: "target_param1",
      type: "int",
      label_name: labelchecker(Lables.target_type.param1[id])
    },
    {
      field_name: "target_param2",
      type: "int",
      label_name: labelchecker(Lables.target_type.param1[id])
    },
    {
      field_name: "target_param3",
      type: "int",
      label_name: labelchecker(Lables.target_type.param1[id])
    },
    { field_name: "target_x", type: "float", label_name: "target_x" },
    { field_name: "target_y", type: "float", label_name: "target_y" },
    { field_name: "target_z", type: "float", label_name: "target_z" },
    { field_name: "target_o", type: "float", label_name: "target_o" }
  ];
};
