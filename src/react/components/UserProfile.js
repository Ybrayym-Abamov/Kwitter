import React from "react";
import { UserInfoBlock, UserDescription } from ".";

// import { Link } from ".";
// import "./UserProfile.css";

class UserProfile extends React.Component {
    render() {
        return (
          <>
          <UserInfoBlock />
          <UserDescription />
          </>
        );
      }
}
export default UserProfile;
