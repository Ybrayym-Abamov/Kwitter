import React from "react";
import { Modal, Button, Icon, Input, Form, Avatar,Upload,message } from "antd";
import { connect } from "react-redux"
import { updateUserThenReloadUser as updateUser,getUserPicture } from "../../redux/actionCreators/users";
import "./UpdateProfile.css";
import "antd/dist/antd.css";

const { TextArea } = Input;

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '', displayName: '', password: ''
    };
  }

  componentDidMount() {
    const { displayName, about, password } = this.props.user;
    this.setState({ displayName, about, password });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleUpdate = () => {
    this.props.updateUser({ password: this.state.password, displayName: this.state.displayName, about: this.state.about });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

   uploadProps = {
    name: 'picture',
    action: `https://kwitter-api.herokuapp.com/users/${this.props.user.username}/picture`,
    method:'put', 
    headers: {
      "Authorization": "Bearer " + JSON.parse(localStorage.login).result.token,
      Accept: "application/json"
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  render() {
    const { visible } = this.state;
    const { loading } = this.props;

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Edit Profile
        </Button>
        <Modal
          visible={visible}
          title="Update Profile"
          onOk={this.handleUpdate}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" block loading={loading} onClick={this.handleUpdate}>
              Submit
            </Button>
          ]}
        >
          <Form onSubmit={this.handleLogin}>
            <Form.Item>
              <label htmlFor="displayName">Edit Display Name</label>
              <Input
                type="text"
                required
                placeholder="Input display name"
                maxLength={20}
                value={this.state.displayName}
                name="displayName"
                autoFocus
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="password">Edit Password</label>
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                required
                maxLength={20}
                placeholder="Input password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <label htmlFor="about">Edit User Bio</label>
              <TextArea
                placeholder="Tell us about yourself in 500 characters"
                rows={4}
                maxLength={500}
                value={this.state.about}
                name="about"
                onChange={this.handleChange}
              />
            </Form.Item>
            <div>
              <Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
              <span>Edit Avatar</span>
              <div>
                <Upload {...this.uploadProps} accept=".gif,.jpeg,.png" size="100">
                  <Button>
                    <Icon type="upload" /> Upload Picture</Button>
                </Upload>
              </div>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}


export default connect(mapStateToProps, { updateUser,getUserPicture })(UpdateProfile);
