import React from "react";
import { LoginForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Style.css";

class Home extends React.Component {
  render() {
    return (
      <div className="centerform">
        <div className="form">
          <h1>Your favorite microblogging platform</h1>
          <LoginForm />
          <h4>
            Don't have an account? <Link to="/register">Register Here</Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
