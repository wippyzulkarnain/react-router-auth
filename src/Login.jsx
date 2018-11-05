import React, { Component } from "react";
import {Redirect} from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { email, password } = this.state;
    if(this.props.isAuthenticated ===true){
      return (<Redirect to="/employees" />)
    }else {
    return (
      <div>
        <h1>Login Page</h1>
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="email"
          onChange={this.handleOnChange}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleOnChange}
        />{" "}
        <br />
        <button onClick={() => this.props.handleLogin(email, password)}>
          Login
        </button>
      </div>
    );
    }
  }
}

export default Login;
