import React from "react";
import { UserList, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Style.css";

class Users extends React.Component {
  render() {
    return (
      <div className="maincontent">
        <div className="col1">
          <Sidebar />
        </div>
        <div className="col2">
            <TopMenu isAuthenticated={this.props.isAuthenticated} />
          <h1 className="header">The Masses</h1>
          <div className="fulldiv"/>
          <div className="content">
            <UserList />
          </div>
        </div>
      </div>
      
    );
  }
}

export default userIsAuthenticated(Users);
