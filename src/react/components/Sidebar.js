import React from "react";
import { UserInfoBlock, CreateNewMessage } from "../components";
import "./Sidebar.css";
// import kwitterLogo from ".src/images/kwitterLogo.png";
//this component will be styled to be side-by-side with the main content component

class Sidebar extends React.Component {
  render() {
    return (
      <div class="sidebar">
        <h1>Urth Kwitter</h1>
        <UserInfoBlock />
        <CreateNewMessage />
      </div>
    );
  }
}
export default Sidebar;
