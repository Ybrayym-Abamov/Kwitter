import React from "react";
import { UserList, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Style.css";

class Users extends React.Component {
  render() {
    return (
      <div class="maincontent">
        <div class="col1">
          <Sidebar />
        </div>
        <div class="col2">
            <TopMenu isAuthenticated={this.props.isAuthenticated} />
          <div class="content">
            <UserList />
          </div>
        </div>
      </div>
      
    );
  }
}

export default userIsAuthenticated(Users);
