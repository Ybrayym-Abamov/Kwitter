import React from "react";
import { UserList, TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Users extends React.Component {
  render() {
    return (
      <>
        <TopMenu isAuthenticated={this.props.isAuthenticated} />
        <Sidebar />
          <h3>this is the users page</h3>
        <UserList />
          
        
      </>
    );
  }
}

export default userIsAuthenticated(Users);
