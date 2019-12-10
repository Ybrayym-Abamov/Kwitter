import React from "react";
import { Card, Avatar } from "antd";
import "antd/dist/antd.css";
// import { UserDescription } from "."
// import { Link } from ".";
// import "./UserInfoBlock.css";
// import { userIsAuthenticated } from "../HOCs";
import { withAsyncAction } from "../HOCs";

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
    const {username}=JSON.parse(localStorage.login).result;
    this.props.getUserPicture(username); 
    this.setState({
      isLoaded: true,
      //user:this.props.user,
      username: username
    });
  }

  render() {
    var { isLoaded } = this.state;
    const image=this.props.result || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Card bordered={false}>
          <Meta
            avatar={ <Avatar size={64} src={image} />} 
            //we'll need to make this link to whatever icon the user uploads
            title={`${this.props.user.displayName} (${this.state.username})`} 
            // we'll need to make this show the name for the user account
          />
        </Card>
      );
    }
  }
}
    
//export default UserInfo;
export default withAsyncAction("users", "getUserPicture") (UserInfo);