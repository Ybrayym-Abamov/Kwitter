import React from "react";
// import { UserDescription } from "."
// import { Link } from ".";
// import "./UserInfoBlock.css";
// import { userIsAuthenticated } from "../HOCs";
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

class UserInfo extends React.Component {

    render() {
        return (
            <Card>
                <Meta
                avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                title="User Name" // we'll need to make this show the name for the user account
                />
                <div class="editbutton">
                Edit Profile
                </div>
            </Card>
            );
        }
    
    }
    
export default UserInfo;
    