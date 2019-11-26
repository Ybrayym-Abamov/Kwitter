import React from "react";
import { UserList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Users extends React.Component {
  render() {
    return (
      <>
          <h3>this is the users page</h3>
        <UserList />
          
        
      </>
    );
  }
}

export default userIsAuthenticated(Users);
