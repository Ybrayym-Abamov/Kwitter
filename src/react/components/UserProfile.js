import React from "react";
import { UserInfo, UserDescription, DeleteUserButton } from ".";
import { Link } from "../components";
import pages from "../pages";
import { Card, Button, Icon } from 'antd';
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
            <Button type="primary" key="edit">
              <Link to={pages.UpdateProfile.path}>
                  Edit Profile  
                <Icon type="edit" />
              </Link>
            </Button>
          </Card>
        </>
        );
      }
}
export default UserProfile;
