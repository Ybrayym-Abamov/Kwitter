import React from "react";
import { Card, Avatar } from "antd";
import "antd/dist/antd.css";
// import { UserDescription } from "."
// import { Link } from ".";
// import "./UserInfoBlock.css";
// import { userIsAuthenticated } from "../HOCs";

const { Meta } = Card;

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isLoaded: false
    };
  }

  componentDidMount() {
    debugger;
    this.setState({
      isLoaded: true,
      user:this.props.user,
      username: JSON.parse(localStorage.login).result.username
    });
  }

  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Card>
          <Meta
            avatar={ <Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} 
            //we'll need to make this link to whatever icon the user uploads
            title={this.state.username} 
            // we'll need to make this show the name for the user account
          />
        </Card>
      );
    }
  }
}
    
export default UserInfo;