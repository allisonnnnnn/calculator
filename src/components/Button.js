import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  isNotOperator = val => {
    // !isNaN(val) or "." or "="  the val passed in is number, or '.' or '=' return true
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return (
      <div
        className={`button ${
          this.isNotOperator(this.props.children) ? "" : "operator"
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}
