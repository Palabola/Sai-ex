import React, { Component } from "react";
import Dropdown from "./Dropdown";
import SaiEnums from "./enums/sai-enums";

export class SaiEditor extends Component {
  // this.props === { current_sai_script: state.current_sai_script }

  render() {
    return (
      <div className="ui three column doubling grid">
        <div className="column three wide">
          Event:
          <Dropdown
            action_role="EVENT_SELECTOR"
            placeholder="Event"
            options={SaiEnums.EnumtoDropdown(SaiEnums.SMART_EVENT)}
          />
        </div>
        <div className="column three wide">Event</div>
        <div className="column three wide">Action</div>
        <div className="column three wide">Target</div>
      </div>
    );
  }
}

/** 
 * 
 *             
 * 
          Action:
          <Dropdown
            action_role="action_selector"
            placeholder="Event"
            options={SaiEnums.EnumtoDropdown(SaiEnums.SMART_ACTION)}
          />
          Target:
          <Dropdown
            action_role="target_selector"
            placeholder="Event"
            options={SaiEnums.EnumtoDropdown(SaiEnums.SMARTAI_TARGETS)}
          />
*/

export default SaiEditor;
