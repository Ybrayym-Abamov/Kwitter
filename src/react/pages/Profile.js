import React from "react";
import { MessageFeed, UserProfile, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Style.css";

class Profile extends React.Component {
  render() {
    return (
      <div class="maincontent">
        <div class="col1">
          <Sidebar />
        </div>
        <div class="col2">
          <TopMenu isAuthenticated={this.props.isAuthenticated} />
          <div class="content">
            <h3>this section is the full profile of a user</h3>
            <UserProfile />
          </div>
            <hr />
          <div class="content">
          <h3>this section is the feed of all messages posted by this particular user</h3>
          <MessageFeed />
        </div>
        </div>
      </div>
      
    );
  }
}

export default userIsAuthenticated(Profile);