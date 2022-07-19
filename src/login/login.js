import './login.css';
function Login() {
  return (
    <>
    <h1>Login to your account. </h1>
    <form>
    <div class="row">
    <div class="col">
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">With which email address do you have registered?</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'  ></input>
    </div>
    </div>
    <div class="col">
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">What is your password?</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'></input>
    </div>
    {/* <div class="button"> */}
    </div>
    </div>
    {/* </div> */}
    <button type="submit" class="btn" style={{textAlign:"center"}}>Submit</button>
  </form>
    <p> Not signed up for an account?You can register here<br></br>
     Forgot your password?You can change it here</p>
   </>
  );
}

export default Login;
