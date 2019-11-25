import React from "react";
import { Link } from "../components";
import pages from "../pages";
import { Result, Button } from 'antd';

class NotFound extends React.Component {
  render() {
    return (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist...yet"
    extra={<Button type="primary" >Back Home</Button>}
    />,
    <Link to={pages.Home.path}></Link>
 
    );
  }
}

export default NotFound;
