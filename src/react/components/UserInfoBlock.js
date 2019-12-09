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
{/* <<<<<<< HEAD
            <UserInfo username={JSON.parse(localStorage.login).result.username}/>
            <Card bordered={false}>
                <UserDescription /> 
                <p/>
                <p>This will link to the user's entered profile information. if it is longer than desired, it will be shortened with an affordance to view the full profile on the user's full profile/feed page</p> */}

            <UserInfo user={userData}/>
            <Card bordered={false}>
                <UserDescription about={userData.about}/> 
                {/* <p/> */}
                {/* <p>This will link to the user's entered profile information. if it is longer than desired, it will be shortened with an affordance to view the full profile on the user's full profile/feed page</p> */}
{/* >>>>>>> 40edb6f7a5c21f12f158c22e8df28edb7b20819b */}
                
            </Card>
        </div>
    );
}

}

export default withAsyncAction("users", "getUser") (UserInfoBlock);
// export default UserInfoBlock;
