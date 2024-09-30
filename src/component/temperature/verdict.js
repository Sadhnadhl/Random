import React from "react";
class Check extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.celsius >= 100 ? (
          <h2>The water would boil</h2>
        ) : (
          <h1>The water wont boil.</h1>
        )}
      </div>
    );
  }
}
export default Check;
