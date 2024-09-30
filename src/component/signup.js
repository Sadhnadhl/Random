import React from "react";
// import { Link } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      number: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(
      "Submitted name:" +
        this.state.username +
        "Submitted password:" +
        this.state.password +
        " Submitted phone:" +
        this.state.number
    );
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input
          name="username"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        ></input>
        <label>Phone:</label>
        <input
          name="number"
          type="number"
          value={this.state.number}
          onChange={this.handleChange}
        ></input>
        <button type="submit">Submit</button>

        <ul>
          <li>
            <Link to={`form`}>SignIn</Link>
          </li>
        </ul>
      </form>
    );
  }
}
export default SignIn;
