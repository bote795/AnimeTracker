import React, { Component } from 'react'

export default class FormGroup extends Component {
  render() {
    const { inputId, title, value, handleInputChange} = this.props;
    return (
      <div>
        <label className='label' htmlFor={inputId}>{title}</label>
        <input
          value={value}
          onChange={handleInputChange}
          name={inputId}
          className='input'
          id={inputId}
          type='text'
        />
      </div>
    )
  }
}
