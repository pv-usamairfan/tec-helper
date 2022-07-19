import "./Registration.css";
function Registration() {
  return (
    <>
      <h1>Please register. </h1>
      <form>
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
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="last name"
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
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    placeholder="Number"
                  ></input>
                </div>
              </div>
              <div className="row" style={{ marginTop: "3%" }}>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="postcode"
                    placeholder="post code"
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
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="e-mail"
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    id="telephonenumber"
                    placeholder="telephone number"
                  ></input>
                </div>
              </div>
            </div>
          </div>

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
            ></input>
            <label className="form-check-label" for="flexCheckChecked">
              I accept the data protection policy
            </label>
          </div>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
        {/* </div> */}
      </form>
    </>
  );
}

export default Registration;
