import React from "react";
// import { Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Settings extends React.Component {
  render() {
    return (
      <>
        <p>this is the user settings page</p>
      </>
    );
  }
}

export default userIsAuthenticated(Settings);
