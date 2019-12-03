import React from "react";
import { MessageFeed, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class LiveFeed extends React.Component {
  render() {
    return (
      <>
        <TopMenu isAuthenticated={this.props.isAuthenticated} />
        <Sidebar />
        <MessageFeed />
      </>
    );
  }
}

export default userIsAuthenticated(LiveFeed);
