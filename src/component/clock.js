import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h2>{this.state.date.toLocaleDateString()}</h2>
      </div>
    );
  }
}

export default Clock;
