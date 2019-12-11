import React from "react";
import { RegisterForm, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Style.css";

class Register extends React.Component {
  render() {
    return (
      <div className="centerform">
        <div className="form">
          <h1>Register your new account</h1>
          <RegisterForm />
          <h4>
            <Link to="/">Go Back Home</Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Register);
