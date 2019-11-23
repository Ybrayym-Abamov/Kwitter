import React from "react";
import { TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <TopMenu isAuthenticated={this.props.isAuthenticated} />
        <Sidebar />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
