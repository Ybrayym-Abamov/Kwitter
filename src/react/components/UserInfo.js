import React from "react";
import { Card, Avatar } from "antd";
import "antd/dist/antd.css";
import { withAsyncAction } from "../HOCs";

const { Meta } = Card;

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isLoaded: false,
      displayName: ""
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    if (!this.props.result) {
        return <div>Loading...</div>;
    }
    const userData = this.props.result.user;
    const image =`https://urth-kwitter.herokuapp.com/users/${userData.username}/picture`;

      return (
        <Card bordered={false}>
          <Meta
            avatar={ <Avatar size={64} src={image} />} 
            //we'll need to make this link to whatever icon the user uploads
            title={userData.displayName} 
            // we'll need to make this show the name for the user account
          />
        </Card>
      );
    }
  }

    
//export default UserInfo;
export default withAsyncAction("users", "getUser",  "getUserPicture") (UserInfo);