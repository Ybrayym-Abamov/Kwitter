import React from "react";
import { TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Users extends React.Component {
  render() {
    return (
      <>
        <TopMenu isAuthenticated={this.props.isAuthenticated} />
        <Sidebar />
        <p>this is the users page</p>
        <Sidebar />
      </>
    );
  }
}

export default userIsAuthenticated(Users);
