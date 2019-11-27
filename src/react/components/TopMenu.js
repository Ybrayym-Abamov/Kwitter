import React from "react";
import { Link } from ".";
import "./TopMenu.css";
import pages from "../pages";
import { LogOut } from "./index";
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

  render() {
    return (
      <div id="menu">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home" >
            <div id="homeButton">
              <Icon type="home" />
              <Link to={pages.Home.path}>Home</Link>
            </div>
          </Menu.Item>

          <Menu.Item key="users" >
            <div id="usersButton">
              <Icon type="heart" />
              <Link to={pages.Users.path}>Users</Link>
            </div>
          </Menu.Item>

          <Menu.Item key="setting" >
            <div id="settingsButton">
              <Icon type="setting" />
              <Link to={pages.Settings.path}>Settings</Link>
            </div>
          </Menu.Item>

          <Menu.Item key="logout">
            {this.props.isAuthenticated && (
              <LogOut />
            )}
          </Menu.Item>
        </Menu>

      </div>
    );
  }
}

export default TopMenu;

