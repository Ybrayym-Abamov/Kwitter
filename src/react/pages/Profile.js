import React from "react";
import { TopMenu, UserInfoBlock } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        {/* <h2>Profile</h2> */}
        <UserInfoBlock />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
