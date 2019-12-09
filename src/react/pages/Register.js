import React from "react";
import { RegisterForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Style.css";

class Register extends React.Component {
  render() {
    return (
      <div className="form">
        <h2>Register your new account</h2>
        <RegisterForm />
        <h4>
          <Link to="/">Go Back Home</Link>
        </h4>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Register);
