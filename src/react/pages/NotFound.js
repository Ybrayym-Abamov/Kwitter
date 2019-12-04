import React from "react";
import { Link } from "../components";
import pages from "../pages";
import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
import "./Style.css";

class NotFound extends React.Component {
  render() {
    return (
      <Result 
      status="404" 
      title="404" 
      subTitle="Sorry, the page you visited does not exist...yet">
      <Button type="primary" class="goback">
        <Link to={pages.Home.path}>Go back to your live feed</Link>
      </Button>
    </Result>
    );
  }
}

export default NotFound;