import React from "react";
import { withAsyncAction } from "../HOCs";
import "./UpdateProfile.css";
import { Modal, Button, Icon, Input, Form } from "antd";
import "antd/dist/antd.css";

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', about: '', displayName: '', password: ''
    };
  }

  componentDidMount() {
    const { username, displayName, about } = this.props.user;
    this.setState({ username, displayName, about })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleUpdate = () => {
    this.props.updateUser({ password: this.state.password, displayName: this.state.displayName, about: this.state.about });
    // this.setState({
    //   ModalText: 'The modal will be closed after two seconds',
    //   confirmLoading: true,
    // });
    // setTimeout(() => {
    //   this.setState({
    //     visible: false,
    //     confirmLoading: false,
    //   });
    // }, 2000);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const {visible} = this.state;
    const { loading } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Edit Profile
        </Button>
        <Modal
          title="Update Profile"
          visible={visible}
          onOk={this.handleUpdate}
          confirmLoading={loading}
          onCancel={this.handleCancel}
        >
          <Form id="register-form" onSubmit={this.handleLogin}>
            <label htmlFor="username">Username</label>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              value={this.state.username}
              name="username"
              required
              disabled
            />
            <label htmlFor="displayName">Update Display Name</label>
            <Input
              type="text"
              value={this.state.displayName}
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
              value={this.state.about}
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
