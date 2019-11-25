import React from "react";
// import { Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Settings extends React.Component {
  render() {
    return (
      <>
        {/* <Sidebar /> */}
        <p>this is the settings page</p>
      </>
    );
  }
}

export default userIsAuthenticated(Settings);
