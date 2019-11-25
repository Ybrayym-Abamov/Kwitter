import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form id="login-form" onSubmit={this.handleLogin}>
          <Form.Item>
            <label htmlFor="username">Username</label>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="password">Password</label>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Password"
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading}
            className="login-form-button"
          >
            Login
          </Button>
          Or <a href="/registration">register now!</a>
          </Form.Item>
          
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}        
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
