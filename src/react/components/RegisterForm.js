import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./RegisterForm.css";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import FormItem from "antd/lib/form/FormItem";

class RegisterForm extends React.Component {
  state = { username: "", password: "", displayName: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.postUser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form id="register-form" onSubmit={this.handleLogin}>
          <Form.Item>
            <label htmlFor="username">Username</label>
            <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="displayName">Display Name</label>
            <Input
              type="text"
              name="displayName"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <label htmlFor="password">Password</label>
            <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </Form.Item>
          <Button type="primary"
            htmlType="submit" className="register-form-button" disabled={loading}>
            Register
          </Button>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users", "postUser")(RegisterForm);
