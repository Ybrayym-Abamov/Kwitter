import React from "react";
import { MessageFeed, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Style.css";

class LiveFeed extends React.Component {
  render() {
    return (
      <div class="maincontent">
        <div class="col1">
          <Sidebar />
        </div>
        <div class="col2">
          <TopMenu isAuthenticated={this.props.isAuthenticated} />
          <div class="content">
            <MessageFeed />
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(LiveFeed);
