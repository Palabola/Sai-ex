import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { selectEvent, SaiEditField } from "../actions/";

class DropdownExport extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.selectEvent(3)}>Hello World</button>

        <button onClick={() => this.props.SaiEditField(3, 4)}>
          Hello World2
        </button>
        <Dropdown
          placeholder="Select Event"
          fluid
          search
          selection
          options={this.props.options}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Redux Render:", state);
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { selectEvent, SaiEditField }
)(DropdownExport);
