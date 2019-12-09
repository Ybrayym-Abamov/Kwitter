import React from "react";
import { MessageFeed, UserProfile, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Style.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="maincontent">
        <div className="col1">
          <Sidebar />
        </div>
        <div className="col2">
          <TopMenu isAuthenticated={this.props.isAuthenticated} />
          <div className="content">
            <h3>this section is the full profile of a user</h3>
            <UserProfile />
          </div>
            <hr />
          <div className="content">
          <h3>this section is the feed of all messages posted by this particular user</h3>
          <MessageFeed />
        </div>
        </div>
      </div>
      
    );
  }
}

export default userIsAuthenticated(Profile);