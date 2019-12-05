import React from "react";
import { UserInfo, UserDescription, DeleteUserButton, UpdateProfile } from ".";
import { Card } from 'antd';
import 'antd/dist/antd.css';


// import { Link } from ".";
// import "./UserProfile.css";

class UserProfile extends React.Component {
    render() {
        return (
        <>
            <UserInfo />
          <Card>
            <UserDescription />
            <p>message counter code here  |  registration date code here</p>
            <UpdateProfile />
            <DeleteUserButton />
          </Card>
        </>
        );
      }
}
export default UserProfile;
