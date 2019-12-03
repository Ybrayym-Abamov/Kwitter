import React from "react";
import { UserInfoBlock } from ".";
// import { Link } from ".";
// import "./UserList.css";

class UserList extends React.Component {
    render() {
        return (
          <>
            <UserInfoBlock />
            <p>This will be a feed of userinfoblocks for all registered users.</p>
          </>
        );
      }
}
export default UserList;
