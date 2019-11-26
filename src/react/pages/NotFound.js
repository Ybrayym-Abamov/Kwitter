import React from "react";
import { Link } from "../components";
import pages from "../pages";
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';


class NotFound extends React.Component {
  render() {
    return (
      // <Menu.Item key="setting" > 
      //     <div id="settingsButton">
      //       <Icon type="setting" />
      //       <Link to={pages.Settings.path}>Settings</Link>
      //     </div>
        // </Menu.Item>
  <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist...yet">,
    <Button type="primary" ><Link to={pages.Home.path}>Back Home</Link></Button>
    </Result>
    );
  }
}

export default NotFound;
