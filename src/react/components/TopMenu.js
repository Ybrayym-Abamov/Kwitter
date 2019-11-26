import React from "react";
import { Link } from ".";
import "./TopMenu.css";
import pages from "../pages";
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
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="home" >
            <div id="homeButton">
              <Icon type="home" />
              <Link to={pages.LiveFeed.path}>Live Feed</Link>
            </div>
          </Menu.Item>
          <Menu.Item key="users" > 
            <div id="usersButton">
              <Icon type="team" />
              <Link to={pages.Users.path}>User List</Link>
            </div>
          </Menu.Item>
          <Menu.Item key="profile" > 
            <div id="profileButton">
              <Icon type="user" />
              <Link to={pages.Profile.path}>My Profile</Link>
            </div>
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
