import React from "react";
// import { Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Users extends React.Component {
  render() {
    return (
   
        
        <p>this is the users page</p>
      
    );
  }
}

export default userIsAuthenticated(Users);
