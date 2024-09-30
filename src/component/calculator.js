import React from "react";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      inputValue: 0,
    };
    this.addition = this.addition.bind(this);
    this.subtraction = this.subtraction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addition() {
    console.log("working");
    this.setState((prevState) => ({
      number: prevState.number + parseInt(this.state.inputValue),
    }));
  }
  subtraction() {
    this.setState((prevState) => ({
      number: prevState.number - parseInt(this.state.inputValue),
    }));
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Simple calculator</h1>
        <input
          type="number"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <h2>{this.state.number}</h2>
        <button onClick={this.addition}>Add</button>
        <button onClick={this.subtraction}>Subtract</button>
      </div>
    );
  }
}
export default Calculator;
