import React from "react";
import { LoginForm, TopMenu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <TopMenu /> {/*might remove menu from login screen for style purposes*/}
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
