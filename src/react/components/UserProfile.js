import React from "react";
import { UserInfo, UserDescription, DeleteUserButton, UpdateProfile } from ".";
// import pages from "../pages";
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { withAsyncAction } from "../HOCs"

// import { Link } from ".";
import "./UserProfile.css";

class UserProfile extends React.Component {

  state = {
    user: {},
    isLoaded: false
  };

  componentDidMount() {
    this.props.getUser(JSON.parse(localStorage.login).result.username);
  }

  // render() { 
  //   debugger;
  //   if (this.props.result === null) {
  //     return <div>Loading...</div>;
  //   }
  //   const userData = this.props.result.user;

    render() {
      return (
        <>
          <UserInfo />
          <Card>
            <UserDescription />
            <p>message counter code here  |  registration date code here</p>
            {this.getUpdateProfileDom()}
            {/* <div id="accountbuttons">
              <Button type="primary" block>
              <Link to={pages.UpdateProfile.path}>
              <Icon type="edit" />
                Edit Profile  
                </Link>
              </Button> */}
            <DeleteUserButton />
            {/* </div> */}
          </Card>
        </>
      );
    }
  }

export default withAsyncAction("users", "getUser")(UserProfile);