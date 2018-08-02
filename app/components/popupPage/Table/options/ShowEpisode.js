import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
export default class ContentEditableEvent extends Component {
  handleChange = e => {
    //TODO: Validate that this is a number 
    const { id, edit, action } = this.props;
    const body = {
      type: action,
      id,
      value: e.target.value
    };
    return edit(body);
  };
  render() {
    const { value, placeholder } = this.props;
    return (
      <ContentEditable
        className="episode-content-editable"
        placeholder={placeholder}
        html={value || ""} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
      />
    );
  }
}
