import React from "react";
import { withAsyncAction } from "../HOCs";
/*import { UserInfo, UserDescription, DeleteUserButton } from ".";*/
// import { Link } from "../components";
// import pages from "../pages";
import { Button} from "antd";
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
    return <Button type="danger" key="delete" onClick={this.handleDeleteUser}>                Delete your account
    </Button>;
  }
}

export default withAsyncAction("users", "deleteUser")(DeleteUserButton);
