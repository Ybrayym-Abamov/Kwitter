import React from "react";
import { UserInfoBlock, CreateNewMessage } from "../components";
//this component will be styled to be side-by-side with the main content component

class Sidebar extends React.Component {
    render() {
        return (
          <>
          <h1>Urth Kwitter</h1>
            <UserInfoBlock />
            <CreateNewMessage /> {/*this has not been merged yet*/}
          </>
        );
      }
}
export default Sidebar;

