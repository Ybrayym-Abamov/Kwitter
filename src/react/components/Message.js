import React from "react";
// import { Link } from ".";
// import "./Message.css";
import { Card, Avatar } from 'antd';

import 'antd/dist/antd.css';

const { Meta } = Card;


class Message extends React.Component {
    render() {
        return (
            <Card
            // style={{ width: 250 }}

            // these elements are just commented out in case I want to use them later
            
            // cover={
            // <img
            //     alt="example"
            //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            // />
            // }
            // actions={[
            // <Icon type="setting" key="setting" />,
            // <Icon type="edit" key="edit" />,
            // <Icon type="ellipsis" key="ellipsis" />,
            // ]}
        >
            <Meta
            avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
            title="This User's Name" // we'll need to make this show the name for the user account
            />
            <p>this should be where the message shows up, put that code here</p>
        </Card>
        );
      }
}
export default Message;
