import React from "react";
import { TopMenu, Sidebar, Message } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <TopMenu isAuthenticated={this.props.isAuthenticated} />
        <Sidebar />
        <Message />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);