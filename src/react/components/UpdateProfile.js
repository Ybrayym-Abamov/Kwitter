import React from "react";
import { withAsyncAction } from "../HOCs";
import "./UpdateProfile.css";
import { Modal, Button, Icon, Input, Form } from "antd";
import "antd/dist/antd.css";

class UpdateProfile extends React.Component {
  state = { username: "sdsajdf", password: "", displayName: "" ,visible: false,
  confirmLoading: false};

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Edit Profile
        </Button>
        <Modal
          title="Update Profile"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form id="register-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="text"
            name="username"
            required
            disabled
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Update Display Name</label>
          <Input
            type="text"
            name="displayName"
            autoFocus
            onChange={this.handleChange}
          />
          <label htmlFor="password">Update Password</label>
          <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            name="password"
            onChange={this.handleChange}
          />
          <label htmlFor="about">About</label>
          <Input
            type="text"
            name="about"
            onChange={this.handleChange}
          />        
        </Form>
        </Modal>
      </div>
    );
  }
}

export default withAsyncAction("users", "updateUser")(UpdateProfile);
