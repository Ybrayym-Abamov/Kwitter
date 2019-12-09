import React from "react";
import { UserInfo, UserDescription, DeleteUserButton, UpdateProfile } from ".";
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { withAsyncAction } from "../HOCs";

class UserProfile extends React.Component {
  state = {
    user: {},
    isLoaded: false
  };  

  componentDidMount() {
    this.props.getUser(JSON.parse(localStorage.login).result.username);    
  }

  render() {
    debugger;
    if (this.props.result === null) {
      return <div>Loading...</div>;
  }
  const userData = this.props.result.user;

    return (
      <>
        <UserInfo user={userData}/>
        <Card>
          <UserDescription user={userData}/>
          <p>message counter code here  |  registration date code here</p>
          <UpdateProfile user={userData} visible={false}/>
          <DeleteUserButton />
        </Card>
      </>
    );
  }
}

export default withAsyncAction("users", "getUser") (UserProfile);