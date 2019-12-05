import React from "react";
import { UserInfo, UserDescription, UpdateProfile } from ".";
// import { Link } from "../components";
// import pages from "../pages";
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
            <p>message counter  |  registration date</p>
            {/* <Button type="primary" ><Link to={pages.UpdateProfile.path}>Edit Profile</Link></Button> */}
            <UpdateProfile />
          </Card>
        </>
        );
      }
}
export default UserProfile;
