import React from "react";
import { MessageFeed, UserProfile, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <TopMenu isAuthenticated={this.props.isAuthenticated} />
        <Sidebar />
        <div id="userprofile">
          <h3>this section is the full profile of a user</h3>
          <UserProfile />
        </div>
        <hr />
        <div id="userfeed">
          <h3>this section is the feed of all messages posted by this particular user</h3>
          <MessageFeed />
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
