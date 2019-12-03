import React from "react";
import "./UserInfo.css";
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './CreateNewMessage';

const { Meta } = Card;

class UserInfoBlock extends React.Component {

    render() {
        return (
            <Card style={{ width: 250 }}>
                <Meta
                    avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                    title="User Name" // we'll need to make this show the name for the user account
                    description="I'm a user that likes to do things. Also I like to do stuff."  //this will link to the user's entered profile information. if it is longer than desired, it will be shortened with an affordance to view the full profile on the user's full profile/feed page
                />
            </Card>
        );
    }
}

export default UserInfoBlock;
