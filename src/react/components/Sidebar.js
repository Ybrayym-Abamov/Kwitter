import React from "react";
import { UserInfoBlock, CreateNewMessage } from "../components";
import "./Sidebar.css";
import logo from "../../images/kwitterLogo.png";
//this component will be styled to be side-by-side with the main content component

class Sidebar extends React.Component {
    render() {
        return (
           <div class="sidebar">
              <img class="logo" src={logo} height="150px" width="150px" />
          <h2>A place where you can kwit the urth</h2>
          <hr />
            <UserInfoBlock />
            <CreateNewMessage /> 
          </div>
        );
      }
}
export default Sidebar;
