import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import PropTypes from 'prop-types'

export default class ContentEditableEvent extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    edit: PropTypes.func.isRequired
  };
  state = {
    invalid: false
  };
  handleChange = e => {
    //TODO: Validate that this is a number
    const { id, edit, action } = this.props;
    if (e.target.value.match(/^\d*$/) != null) {
      console.log("it matches");
      const body = {
        type: action,
        id,
        value: e.target.value
      };
      this.setState(() => ({
        invalid: false
      }));
      return edit(body);
    } else {
      //add red class
      this.setState(() => ({
        invalid: true
      }));
    }
  };
  render() {
    const { value, placeholder, disabled } = this.props;
    const { invalid } = this.state;
    let errorClass = invalid ? "error" : "";
    console.log(value);
    return (
      <ContentEditable
        className={`episode-content-editable ${errorClass}`}
        placeholder={placeholder}
        onBlur={this.blur}
        html={value || ""} // innerHTML of the editable div
        disabled={disabled} // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
      />
    );
  }
}
