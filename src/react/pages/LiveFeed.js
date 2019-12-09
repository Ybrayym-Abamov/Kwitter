import React from "react";
import { MessageFeed, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Style.css";

class LiveFeed extends React.Component {
  render() {
    return (
      <div className="maincontent">
        <div className="col1">
          <Sidebar />
        </div>
        <div className="col2">
          <TopMenu isAuthenticated={this.props.isAuthenticated} />
          <div className="content">
            <MessageFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(LiveFeed);
