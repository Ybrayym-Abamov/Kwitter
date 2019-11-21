import React from "react";
// import { Link } from ".";
import "./UserInfo.css";
// import { userIsAuthenticated } from "../HOCs";
import { Card, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

class UserInfoBlock extends React.Component {

    render() {
        return (
        <Card
            style={{ width: 250 }}
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
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            title="User Name"
            description="I'm a user that likes to do things. Also I like to do stuff."
            />
        </Card>
    );
}

}

export default UserInfoBlock;
