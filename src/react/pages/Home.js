import React from "react";
import { LoginForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Style.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="form">
          <h2>Your favorite microblogging</h2>
          <p>platform</p>
          <LoginForm />
          <h4>
            Don't have an account? <Link to="/register">Register Here</Link>
          </h4>
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
