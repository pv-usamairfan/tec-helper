import './reg.css';
function Reg() {
  return (
    <>
    <h1>Please register. </h1>
    <form>
    <div class="row">
    <div class="col">
    <div class="mb-3">
    <div class="row">
    <label for="name" class="form-label">What's your name?</label>
    <div class="col">
      <input type="text" class="form-control" id="name"  placeholder='first name'  ></input>
      </div>
      <div class="col">
      <input type="text" class="form-control" id="name"  placeholder='last name'  ></input>
      </div>
      </div>
    </div>
    </div>
    <div class="col">
    <div class="mb-3">
    <div class="row">
    <label for="street" class="form-label">Where are you living?</label>
    <div class="col">
    <input type="text" class="form-control" id="street" placeholder='Street'></input>
    </div>
    <div class="col">
    <input type="text" class="form-control" id="number" placeholder='Number'></input>
    </div>
    </div>
    <div class="row" style={{marginTop:"3%"}}>
    <div class="col">
    <input type="text" class="form-control" id="postcode" placeholder='post code'></input>
    </div>
    <div class="col">
    <input type="text" class="form-control" id="place" placeholder='Place'></input>
    </div>
    </div>
    </div>
    {/* <div class="button"> */}
    
    </div>
    
    </div>
    <div class="row">
    <div class="col">
    <div class="mb-3">
    <div class="row">
    <label for="email" class="form-label">How can we reach you?</label>

    <div class="col">
      <input type="text" class="form-control" id="email"  placeholder='e-mail'  ></input>
      </div>
      <div class="col">
      <input type="number" class="form-control" id="telephonenumber"  placeholder='telephone number'  ></input>
      </div>
      </div>
    </div>
    </div>
    
    <div class="col">
    <br></br>
      <input type="text" class="form-control" id="country"  placeholder='Country'  ></input>
      </div>
    </div>
    <div class="row"  style={{ margin:"auto",marginTop:"5%", width:"20%"}}>
    <div class="form-check" >
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ></input>
  <label class="form-check-label" for="flexCheckDefault">I have read terms of use and accept them</label>
</div>
<div class="form-check" >
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault " ></input>
  <label class="form-check-label" for="flexCheckChecked">
    I accept the data protection policy
  </label>
</div>
</div>
    <button type="submit" class="btn" >Submit</button>
    {/* </div> */}
  </form>
    
   </>
  );
}

export default Reg;
