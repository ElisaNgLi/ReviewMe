import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LogIn.css";

const LogIn = () => {
  const [providedEmail, setProvidedEmail] = useState("");
  const [providedPassword, setProvidedPassword] = useState("");
  const [validatedEmail, setValidEmail] = useState();
  const [validatedPassword, setValidPassword] = useState();

  const emailHandler = (event) => {
    setProvidedEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setProvidedPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setValidEmail(providedEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setValidPassword(providedPassword.trim().length > 8);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="mt-4 text-center">
          <h1 className="card-title">Welcome</h1>
          <p className="card-subtitle">
            Don't have an account? Join us{" "}
            <Link to="/signup" className="card-link">
              Here
            </Link>
          </p>
        </div>

        <form onSubmit={submitHandler}>
          <div className="mb-4 mt-3">
            <div
              className={`control ${validatedEmail === false ? "invalid" : ""}`}
            >
              <label className="form-label" htmlFor="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={providedEmail}
                onChange={emailHandler}
                onBlur={validateEmailHandler}
                autoFocus
                required
              />
              {validatedEmail === false && <p>Please provide correct email</p>}
            </div>
          </div>
          <div className="mb-4">
            <div
              className={`control ${
                validatedPassword === false ? "invalid" : ""
              }`}
            >
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={providedPassword}
                onChange={passwordHandler}
                onBlur={validatePasswordHandler}
                required
              />
              {validatedPassword === false && (
                <p>Password should contain at least 8 characters</p>
              )}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <label className="form-check-label" htmlFor="form2Example3">
                  {" "}
                  Remember me{" "}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberMe"
                />
              </div>
            </div>

            <div className="col">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="button mb-4">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;