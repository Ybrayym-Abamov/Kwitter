import React from "react";
import { MessageFeed } from "../components";
import { userIsAuthenticated } from "../HOCs";

class LiveFeed extends React.Component {
  render() {
    return (
      <>
        <MessageFeed />
      </>
    );
  }
}

export default userIsAuthenticated(LiveFeed);
