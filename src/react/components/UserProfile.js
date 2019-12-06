import React from "react";
import { UserInfo, UserDescription, DeleteUserButton, UpdateProfile, Link } from ".";
import pages from "../pages";
import { Card, Button, Icon } from 'antd';
import 'antd/dist/antd.css';


// import { Link } from ".";
import "./UserProfile.css";

class UserProfile extends React.Component {
    render() {
        return (
        <>
            <UserInfo />
          <Card>
            <UserDescription />
            <p>message counter code here  |  registration date code here</p>
            <div id="accountbuttons">
              <Button type="primary" block>
              {/* <Link to={pages.UpdateProfile.path}> */}
              <Icon type="edit" />
                Edit Profile  
                {/* </Link> */}
              </Button>
              <DeleteUserButton />
            </div>
          </Card>
        </>
        );
      }
}
export default UserProfile;
