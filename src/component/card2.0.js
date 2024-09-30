import React from "react";
import bikeImage from "../assets/images/bike.jpg";
import carImage from "../assets/images/car.jpg";

class Card2 extends React.Component {
  constructor() {
    super();
    this.state = {
      image: true,
    };
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    this.setState((prevState) => ({
      image: !prevState.image,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleButton}>
          {this.state.image ? "Show image of car" : "Show images of bike"}
        </button>
        <div className="card">
          <img
            src={this.state.image ? bikeImage : carImage}
            alt={this.state.image ? "Bike" : "Car"}
          />
        </div>
      </div>
    );
  }
}
export default Card2;
