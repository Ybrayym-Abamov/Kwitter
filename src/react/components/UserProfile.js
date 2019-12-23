import React from "react";
import { UserInfo, UserDescription, DeleteUserButton, UpdateProfile } from ".";
// import "./UserProfile.css";
import { Card, Divider } from 'antd';
import 'antd/dist/antd.css';
import { withAsyncAction } from "../HOCs";
import moment from 'moment';

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
const date = moment(userData.createdAt).subtract(10, 'days').calendar();
    return (
      <>
        <UserInfo user={userData} />
        <Card bordered={false}>
          <UserDescription user={userData}/>
          <UserDescription about={userData.about}/> 
          <Divider />
          <p className="subdata">Kwitting the Urth since {date}</p>
          <div className="accountbuttons">
            <div className="profilebtn"><UpdateProfile user={userData} visible={false}/></div>
            <div  className="profilebtn"><DeleteUserButton /></div>
          </div>
        </Card>
      </>
    );
  }
}

export default withAsyncAction("users", "getUser")(UserProfile);
