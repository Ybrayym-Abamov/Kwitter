import React from "react";
import { UserInfoBlock, CreateNewMessage } from "../components";
import "./Sidebar.css";
import logo from "../../images/kwitterLogo.png";

//this component will be styled to be side-by-side with the main content component

class Sidebar extends React.Component {
    render() {
        return (
           <div className="sidebar">
              <img className="logo" src={logo} height="150px" width="150px" alt="logo" />
          <h3 className="tagline">A place where you can kwit the urth</h3>
          <hr />
            <UserInfoBlock />
          <hr />
          <h2>Kweet Kweet</h2>
            <CreateNewMessage /> 
          </div>
        );
      }
}
export default Sidebar;
