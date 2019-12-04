import React from "react";
import { withAsyncAction } from "../HOCs";
/*import { UserInfo, UserDescription, DeleteUserButton } from ".";*/
import { Link } from "../components";
import pages from "../pages";
import { Card, Button } from "antd";
import "antd/dist/antd.css";

// import { Link } from ".";
// import "./UserProfile.css";

class DeleteUserButton extends React.Component {
  handleDeleteUser = event => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmed) {
      this.props.deleteUser();
    }
  };
  render() {
    return <button onClick={this.handleDeleteUser}>Delete your account</button>;
  }
}

export default withAsyncAction("users", "deleteUser")(DeleteUserButton);
