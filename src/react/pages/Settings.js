import React from "react";
import { TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Settings extends React.Component {
  render() {
    return (
      <>
        <TopMenu isAuthenticated={this.props.isAuthenticated} />
        <Sidebar />
        <p>this is the settings page</p>
      </>
    );
  }
}

export default userIsAuthenticated(Settings);
