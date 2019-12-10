import React from "react";
import { UserDescription, UserInfo } from "."
// import { Link } from ".";
import "./UserInfo.css";
// import { userIsAuthenticated } from "../HOCs";
import { Card} from 'antd';
import 'antd/dist/antd.css';
import { withAsyncAction } from "../HOCs";
// import './CreateNewMessage';

class UserInfoBlock extends React.Component {
    componentDidMount() {
        this.props.getUser();    
      }
    render() {
        if (this.props.result === null) {
            return <div>Loading...</div>;
        }
        const userData = this.props.result.user;
        
        return (
        <div id="userinfoblock">
            <UserInfo user={userData}/>
            <Card bordered={false}>
                <UserDescription about={userData.about}/>
            </Card>
        </div>
    );
}

}

export default withAsyncAction("users", "getUser") (UserInfoBlock);
// export default UserInfoBlock;
