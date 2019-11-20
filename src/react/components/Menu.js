import React from "react";
import { Link } from ".";
import "./Menu.css";
import { withAsyncAction } from "../HOCs";
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';


class TopMenu extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  

  render() {
    return (
      <div id="menu">
        <h1>Urth Kwitter</h1>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>

        <Menu.Item key="users">
          <Icon type="heart" />
          Users
        </Menu.Item>

        <Menu.Item key="setting">
          <Icon type="setting" />
          Settings
        </Menu.Item>

        <Menu.Item key="logout">
          {this.props.isAuthenticated && (
            <div id="logout">
              <Icon type="logout" />
              <Link to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            </div>
          )}
        </Menu.Item>
      </Menu>
       
      </div>
    );
  }
}



export default withAsyncAction("auth", "logout")(TopMenu);
