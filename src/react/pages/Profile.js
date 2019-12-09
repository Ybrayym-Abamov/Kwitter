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
          <h1 className="header">Profile & Kweets</h1>
          <div className="fulldiv"/>
          <div className="content">
            <UserProfile />
          </div> 
          <div className="fulldiv"/>
          <div className="content">
          <MessageFeed />
        </div>
        </div>
      </div>
      
    );
  }
}

export default userIsAuthenticated(Profile);