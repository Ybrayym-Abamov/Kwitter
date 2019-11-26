import React from "react";
import { LoginForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <TopMenu /> might remove menu from login screen for style purposes*/}
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <h4>
          Don't have an account? <Link to="/register">Register Here</Link>
        </h4>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
