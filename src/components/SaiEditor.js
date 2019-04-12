// React things
import React, { Component } from "react";
import Dropdown from "./Dropdown";
import SaiEnums from "../enums/sai-enums";
import SaiForm from "./SaiForm";
import SaiTable from "./SaiTable";

// Redux things
import { connect } from "react-redux";
import {} from "../actions/";

export class SaiEditor extends Component {
  // this.props === { current_sai_script: state.current_sai_script }

  render() {
    return (
      <div>
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
          <div className="column three wide">
            Event:
            <SaiForm
              form_type="event_type"
              type_id={this.props.state.currentSai.event_type}
            />
          </div>
          <div className="column three wide">
            Action:
            <SaiForm
              form_type="action_type"
              type_id={this.props.state.currentSai.action_type}
            />
          </div>
          <div className="column three wide">
            Target:
            <SaiForm
              form_type="target_type"
              type_id={this.props.state.currentSai.target_type}
            />
          </div>
        </div>
        <div className="ui three column doubling grid">
          <div className="column twelve wide">
            <SaiTable />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(SaiEditor);
