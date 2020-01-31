import React from "react";

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    // val from Button children

    this.setState({ input: this.state.input + val });
  };

  addZeroToInput = val => {
    // if this.state.input is not empty, then, add zero;because we dont want the first number to be a zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  addDecimal = val => {
    // only add decial if there is no current decimal
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = val => {
    this.setState({ input: "" });
  };

  add = () => {
    // this.state.previousNumber = this.state.input;
    // this.setState({ input: "" });
    // this.state.operator = "plus";

    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "plus"
    });
    console.log("hi");
  };

  substract = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "substract"
    });
  };

  multiply = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "multiply"
    });
  };

  divide = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "divide"
    });
  };

  evaluate = () => {
    // this.setState({ currentNumber: this.state.input });
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "substract") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.substract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
