import React from "react";
// import { Link } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleSubmit(e) {
    alert("Submitted name  " + this.state.inputValue);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <li>
        
          <Link to={`/`}>return</Link>
        </li>
      </form>
    );
  }
}
export default Form;
