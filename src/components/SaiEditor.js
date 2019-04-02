import React, { Component } from "react";
import Dropdown from "./Dropdown";
import SaiEnums from "./enums/sai-enums";
import { connect } from "react-redux";
import { SaiEditField } from "../actions/";

export class SaiEditor extends Component {
  // this.props === { current_sai_script: state.current_sai_script }

  render() {
    return (
      <div className="ui three column doubling grid">
        <div className="column three wide">
          Event:
          <Dropdown
            field_name="event_type"
            options={SaiEnums.EnumtoDropdown(SaiEnums.SMART_EVENT)}
          />
          Action:
          <Dropdown
            field_name="action_type"
            options={SaiEnums.EnumtoDropdown(SaiEnums.SMART_ACTION)}
          />
          Target:
          <Dropdown
            field_name="target_type"
            options={SaiEnums.EnumtoDropdown(SaiEnums.SMARTAI_TARGETS)}
          />
        </div>
        <div className="column three wide">Event</div>
        <div className="column three wide">Action</div>
        <div className="column three wide">Target</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("Redux Render:", state);
  return {
    state
  };
};

export default connect(mapStateToProps)(SaiEditor);
