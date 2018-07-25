import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SimpleModalWrapped from "../Popup/Popup";
export default class DeleteEntry extends Component {
  state = {
    open: false
  };
  delete = e => {
    e.preventDefault();
    const { id } = this.props;
    const action = {
      type: "delete",
      id
    };
    this.handleClose();
    return this.props.edit(action);
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const POPUP_DELETE_NAME = browser.i18n.getMessage("appPOPUPDELETEName");
    const POPUP_DELETE_BODY = browser.i18n.getMessage("appPOPUPDELETEBody");
    const POPUP_SUCCESS_BUTTON = browser.i18n.getMessage("PopupDelete");

    const { open } = this.state;
    return (
      <div>
        <IconButton onClick={this.handleOpen} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
        <SimpleModalWrapped
          successButton={POPUP_SUCCESS_BUTTON}
          onSuccess={this.delete}
          onCancel={this.handleClose}
          title={POPUP_DELETE_NAME}
          body={POPUP_DELETE_BODY}
          open={open}
        />
      </div>
    );
  }
}
