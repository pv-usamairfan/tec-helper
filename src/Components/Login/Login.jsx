import React, { useState } from "react";

import "./Login.css";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = () => (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = async (event) => {
    var { email, password } = document.forms[0];
    const url = process.env.REACT_APP_BACKEND_URL + "users/login";
    const data = { email: email.value, password: password.value };
    console.log(JSON.stringify(data));
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(async (response) => {
        if (response.ok === false) {
          setErrorMessages(await response.json());
        }
      })
      .catch((error) => {
        setErrorMessages(error);
      });
    event.preventDefault();
  };

  return (
    <>
      <h1>Login to your account. </h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                With which email address do you have registered?
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                name="email"
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                What is your password?
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
              ></input>
            </div>
            {/* <div className="button"> */}
          </div>
        </div>
        {renderErrorMessage()}
        <button type="submit" className="btn" style={{ textAlign: "center" }}>
          Submit
        </button>
      </form>
      <p>
        Not signed up for an account? You can register <a>here</a>
        <br></br>
        Forgot your password? You can change it <a>here</a>
      </p>
    </>
  );
}

export default Login;
