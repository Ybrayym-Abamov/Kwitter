import React from "react";
import { UserInfo, UserDescription, DeleteUserButton, UpdateProfile } from ".";
import { Card} from 'antd';
import 'antd/dist/antd.css';
import "./UserProfile.css";

class UserProfile extends React.Component {

  state = {
    user: {},
    isLoaded: false
  };  

  componentDidMount() {
    const userName = JSON.parse(localStorage.login).result.username;
    const url = `https://kwitter-api.herokuapp.com/users/${userName}`;
    const jsonHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    fetch(url, {
      method: "GET",
      headers: jsonHeaders
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          isLoaded: true,
          user: json.user
        });
      });
  }

  getUpdateProfileDom(){
    const { isLoaded,user } = this.state;
    if (isLoaded) {
      return <UpdateProfile user={user}/>
    }
    else{
      return '';
    }
  }

    render() {
        return (
        <>
            <UserInfo />
          <Card bordered={false}>
            <UserDescription />
            <p>message counter code here  |  registration date code here</p>
            <div className="accountbuttons">
              {this.getUpdateProfileDom()}
              <DeleteUserButton />
            </div>
          </Card>
        </>
        );
      }
}
export default UserProfile;
