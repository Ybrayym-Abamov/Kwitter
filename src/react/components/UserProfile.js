import React from "react";
import { UserInfo, UserDescription, DeleteUserButton, UpdateProfile } from ".";
import "./UserProfile.css";
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { withAsyncAction } from "../HOCs";

class UserProfile extends React.Component {

  state = {
    user: {},
    isLoaded: false
  };

  componentDidMount() {
    this.props.getUser();       
  }

  render() {
    if (this.props.result === null) {
      return <div>Loading...</div>;
  }
  const userData = this.props.result.user;

    return (
      <>
        <UserInfo user={userData}/>
        <Card bordered={false}>
          <UserDescription user={userData}/>
          <UserDescription about={userData.about}/> 
          <p>message counter code here  |  registration date code here</p>
          <div className="accountbuttons">
            <UpdateProfile user={userData} visible={false}/>
            <DeleteUserButton />
          </div>
        </Card>
      </>
    );
  }
}

export default withAsyncAction("users", "getUser") (UserProfile);
