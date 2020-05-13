import React, { Component } from "react";
import styled from "./input.module.css";
export default class Input extends Component {
  state = {
    term: null,
    error: false,
  };
  updateValue = (e) => {
    const value = e.target.value;
    this.setState({
      term: value,
    });
    this.props.updateValue(value);
  };
  render() {
    return (
      <input
        className={styled.input}
        type="number"
        placeholder="Уведіть число..."
        onChange={this.updateValue}
      />
    );
  }
}
