import React from "react";
import { TopMenu, Sidebar, UpdateUserForm } from "../components";
// import pages from "../pages";
// import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
import "./Style.css";


class UpdateProfile extends React.Component {
    render() {
      return (
        <div class="maincontent">
        <div class="col1">
          <Sidebar />
        </div>
        <div class="col2">
            <TopMenu isAuthenticated={this.props.isAuthenticated} />
          <div class="content">
        <UpdateUserForm />
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default UpdateProfile;