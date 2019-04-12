import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import { FormFieldsCreator } from "./helpers/SaiFormFields";

// Redux things
import { connect } from "react-redux";
import { SaiEditField } from "../actions";

class SaiForms extends Component {
  handleOnChange = (e, invoker) => {
    this.props.SaiEditField(invoker.field_name, invoker.value);
  };

  renderFormlist(form_type, id) {
    let Formlist = [];
    let Formfields = FormFieldsCreator(form_type, id);

    for (let i = 0; i < Formfields.length; i++) {
      let label = "";

      Formlist.push(
        <div key={Formfields[i].field_name}>
          <div>{Formfields[i].label_name} :</div>
          <Input
            placeholder="Value"
            name={label}
            value={this.props.state.currentSai[Formfields[i].field_name]} // Get Field Value from ReduxState
            onChange={this.handleOnChange}
            field_name={Formfields[i].field_name}
          />
        </div>
      );
    }

    return Formlist;
  }

  render() {
    return (
      <div>{this.renderFormlist(this.props.form_type, this.props.type_id)}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { SaiEditField }
)(SaiForms);
