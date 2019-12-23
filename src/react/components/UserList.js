import React from "react";
// // import { UserInfoBlock } from ".";
// // import { Link } from ".";
import { Card, Avatar, Divider } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { withAsyncAction } from "../HOCs";
// import "./UserList.css";



const { Meta } = Card;


class UserList extends React.Component {

  state = {
    users: [],
    isLoaded: false,
  }

  componentDidMount() {
    this.props.getUsers(this.props.users);
    this.messagePollingID = setInterval(this.props.getUsers, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.messagePollingID)
  }


  render() {

    if (this.props.result === null) {
      return <div>Loading...</div>;
    }
    const getUsers = this.props.result.users

    return (
      <div className='Users'>
        <div>
          {getUsers.map(item => (
            <Card bordered={false} key={item.id} className="userpost">
              <div className="postinfo">
                <Meta key={item.id}
                  avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                  title={item.username}
                  description={item.about}
                />
                <div className="timestamp">Kwitting the Urth since {moment(item.createdAt).subtract(10, 'days').calendar()}</div>
                <Divider />
              </div>
            </Card>
          ))}
        </div>
        <h3>That was all the masses that kwit the urth. there are no more to see.</h3>
      </div>
    );
  }
}
export default withAsyncAction("users", "getUsers")(UserList);