import React from "react";
class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <button
        style={{ backgroundColor: this.state.toggle ? "tomato" : " blue" }}
        onClick={this.handleButton}
      >
        {this.state.toggle ? "On" : "Off"}
      </button>
    );
  }
}
export default Toggle;
