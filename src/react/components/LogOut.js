import React from "react";
import { Link } from ".";
import { withAsyncAction } from "../HOCs";
import { Icon } from 'antd';

class LogOut extends React.Component {

    handleLogout = event => {
        console.log("excute Logout");
        event.preventDefault();
        this.props.logout();
    };

    render() {
        return (
            <div id="logout">
                <Icon type="logout" />
                <Link to="/" onClick={this.handleLogout}>
                    Logout
        </Link>
            </div>
        );
    }
}



export default withAsyncAction("auth", "logout")(LogOut);
