import React from "react";
// import { UserDescription } from "."
// import { Link } from ".";
// import "./UserInfoBlock.css";
// import { userIsAuthenticated } from "../HOCs";
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

class UserInfoBlock extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user: "",
            isLoaded: false,
        }
    }


    componentDidMount() {

        fetch(`https://kwitter-api.herokuapp.com/users/${this.props.username}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    username: JSON.parse(localStorage.login).result.username,
                })
            });
    }


    render() {

        var { isLoaded, user } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else {


            return (
                <Card>
                    <Meta
                        avatar={<Avatar size={64} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} //we'll need to make this link to whatever icon the user uploads
                        title={this.state.username} // we'll need to make this show the name for the user account
                    />
                </Card>
            );
        }
    }

}

export default UserInfoBlock;
