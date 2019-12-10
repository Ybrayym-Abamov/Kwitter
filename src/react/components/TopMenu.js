import React from "react";
import { Link } from ".";
import "./TopMenu.css";
import pages from "../pages";
import { LogOut } from "./index";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";

class TopMenu extends React.Component {
  state = {
    current: "home",
  };

  handleClick = event => {
    console.log("click ", event);
    this.setState({
      current: event.key,
    });
  };

  render() {
    return (
      // <div id="menu">
        <Menu 
          bordered={false}
          className="topmenu"
          style={{ width: 564 }}
          onClick={this.handleClick}
          defaultSelectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
          <Link to={pages.LiveFeed.path}>
              <Icon type="home" />
              Live Feed
            </Link>
          </Menu.Item>

          <Menu.Item key="users" >
            <Link to={pages.Users.path}>
              <Icon type="team" />
              User List
            </Link>
          </Menu.Item>
          
          <Menu.Item key="profile" > 
            <Link to={pages.Profile.path}>
              <Icon type="user" />
              My Profile
              </Link>
          </Menu.Item>
          
          <Menu.Item key="logout">
            {this.props.isAuthenticated && <LogOut />}
          </Menu.Item>
        </Menu>
      // </div>
    );
  }
}

export default TopMenu;
