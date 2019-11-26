import React from "react";
import { UserInfoBlock } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Users extends React.Component {
  render() {
    return (
      <>
        <UserInfoBlock />
          
          <p>this is the users page</p>
        
      </>
    );
  }
}

export default userIsAuthenticated(Users);
