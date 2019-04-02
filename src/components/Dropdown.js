import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { SaiEditField } from "../actions/";

class DropdownExport extends Component {
  handleOnChange(e, invoker) {
    /* field name , value */
    invoker.parentprops.SaiEditField(invoker.field_name, invoker.value);
  }

  render() {
    return (
      <div>
        <Dropdown
          fluid
          search
          selection
          field_name={this.props.field_name}
          options={this.props.options}
          value={this.props.state.currentSai[this.props.field_name]}
          onChange={this.handleOnChange}
          parentprops={this.props}
        />
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

export default connect(
  mapStateToProps,
  { SaiEditField }
)(DropdownExport);
