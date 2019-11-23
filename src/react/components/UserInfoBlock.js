import React from "react";
// import { Link } from ".";
import "./UserInfo.css";
// import { userIsAuthenticated } from "../HOCs";
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

class UserInfoBlock extends React.Component {

    render() {
        return (
        <Card
            style={{ width: 250 }}

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
            title="User Name" // we'll need to make this show the name for the user account
            description="I'm a user that likes to do things. Also I like to do stuff."  //this will link to
            />
        </Card>
    );
}

}

export default UserInfoBlock;
