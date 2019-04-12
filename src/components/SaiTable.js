import React, { Component } from "react";
import SaiEnums from "../enums/sai-enums";
import { Table } from "semantic-ui-react";

// Redux things
import { connect } from "react-redux";
import { SaiEditField } from "../actions";

class SaiForms extends Component {
  handleOnChange = (e, invoker) => {
    this.props.SaiEditField(invoker.field_name, invoker.value);
  };

  renderSaiTableBody() {
    return (
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>No Action</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <div>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>link</Table.HeaderCell>
              <Table.HeaderCell>event</Table.HeaderCell>
              <Table.HeaderCell>phase</Table.HeaderCell>
              <Table.HeaderCell>flags</Table.HeaderCell>
              <Table.HeaderCell>action</Table.HeaderCell>
              <Table.HeaderCell>target</Table.HeaderCell>
              <Table.HeaderCell>comment</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderSaiTableBody()}</Table.Body>
        </Table>
      </div>
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
