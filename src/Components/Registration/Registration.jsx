import React, { useState } from "react";
import "./Registration.css";
function Registration() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = () => (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = async (event) => {
    var {
      email,
      password,
      firstname,
      lastname,
      telephonenumber,
      street,
      number,
      postcode,
      place,
      country,
    } = document.forms[0];
    const url = process.env.REACT_APP_BACKEND_URL + "/create";
    const data = {
      email: email.value,
      password: password.value,
      firstname: firstname.value,
      lastname: lastname.value,
      telephonenumber: telephonenumber.value,
      street: street.value,
      number: number.value,
      postcode: postcode.value,
      place: place.value,
      country: country.value,
    };
    console.log(data)
    fetch(url, {
      method: 'POST',
      mode: 'cors',
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
      <h1>Please register. </h1>
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <div className="row">
                <label for="name" className="form-label">
                  What's your name?
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="first name"
                    required
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="last name"
                    required
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <div className="row">
                <label for="street" className="form-label">
                  Where are you living?
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    placeholder="Street"
                    required
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    placeholder="Number"
                    required
                  ></input>
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    id="postcode"
                    placeholder="post code"
                    required
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="place"
                    placeholder="Place"
                  ></input>
                </div>
              </div>
            </div>
            {/* <div className="button"> */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <div className="row">
                <label for="email" className="form-label">
                  How can we reach you?
                </label>

                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="e-mail"
                    required
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="tel"
                    className="form-control"
                    id="telephonenumber"
                    placeholder="telephone number"
                    required
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="row">
          <div className="col">
            <br></br>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Country"
            ></input>
          </div>
          </div>
          </div>
          </div>
          <div className="row">
          <div className="col">
            <div className="mb-3">
              <div className="row">
                <label for="name" className="form-label">
                  What's your Password?
                </label>
                <div className="col">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required
                  ></input>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <div className="row">
              </div>
            </div>
            {/* <div className="button"> */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
            <div className="row" >
              <label for="role" className="form-label">
                You're registering as(user, admin, freelancer)?
              </label>
              <div className="col">
              <input
                type="text"
                className="form-control"
                id="role"
                placeholder="Role"
                name="role"
                required
              ></input>
              </div>
              
            </div>
            </div>
            {/* <div className="button"> */}
          </div>
          <div className="col">
            <div className="mb-3">
              <div className="row">
              </div>
            </div>
            {/* <div className="button"> */}
          </div>
        </div>
        <div
          className="row"
          style={{ margin: "auto", marginTop: "5%", width: "20%" }}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              required
            ></input>
            <label className="form-check-label" for="flexCheckDefault">
              I have read terms of use and accept them
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault "
              required
            ></input>
            <label className="form-check-label" for="flexCheckChecked">
              I accept the data protection policy
            </label>
          </div>
        </div>
        {renderErrorMessage()}
        <button type="submit" className="btn">
          Submit
        </button>
        {/* </div> */}
      </form>
    </>
  );
}

export default Registration;
