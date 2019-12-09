import React from "react";
import { TopMenu, Sidebar } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "./Style.css";

class Settings extends React.Component {
  render() {
    return (
      <div className="maincontent">
        <div className="col1">
          <Sidebar />
        </div>
        <div className="col2">
            <TopMenu isAuthenticated={this.props.isAuthenticated} />
          <div className="content">
            I think this page will be deleted in favor of 'updateprofile.js'
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Settings);
