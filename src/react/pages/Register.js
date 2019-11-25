 
import React from "react";
import { RegisterForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Register extends React.Component {
  render() {
    return (
      <>
        <h2>Register your new account</h2>
        <RegisterForm />
        <h4>
          <Link to="/">Go Back Home</Link>
        </h4>
      </>
    );
  }
}

export default userIsNotAuthenticated(Register);