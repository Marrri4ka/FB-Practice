import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function Address(props){

  let _firstname = null;
  let _lastname = null;
  let _address = null;
  let _time = null;
  let _date = null;

  function handleSaveAddress(){

    props.saveAddress(_firstname.value, _lastname.value, _address.value, _time.value, _date.value);

  }
  return(
    <div class="container">
      <div class="formTitle" align="center"><h1>Delivery Address Details</h1></div><br/>
      <form class="well form-horizontal" action=" " method="post"  id="contact_form">
        <fieldset>
          <div class="row">
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">First Name</label>
                  <div class="input-group">
                    <input  name="first_name" placeholder="First Name" class="form-control"  type="text" ref = {(input)=>{_firstname=input;}}/>
                  </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">Street</label>
                  <div class="input-group">
                    <input name="address" placeholder="Street" class="form-control" type="text"  ref = {(input)=>{_address=input;}}/>
                  </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">Date</label>
                  <div class="input-group">
                    <input name="date" placeholder="date" class="form-control"  type="date" ref = {(input)=>{_date=input;}}/>
                  </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">Last Name</label>
                  <div class="input-group">
                    <input name="last_name" placeholder="Last Name" class="form-control"  type="text" ref = {(input)=>{_lastname=input;}}/>
                  </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">City</label>
                  <div class="input-group">
                    <input name="city" placeholder="City" class="form-control"  type="text"/>
                  </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">Time</label>
                  <div class="input-group">
                    <input name="city" placeholder="city" class="form-control"  type="time" ref = {(input)=>{_time=input;}}/>
                  </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">E-Mail</label>
                  <div class="input-group">
                    <input name="email" placeholder="E-Mail Address" class="form-control"  type="text"/>
                  </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">State</label>
                  <div class="col-md-4 selectContainer">
                    <div class="input-group">
                      <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                      <select name="state" class="form-control selectpicker" style={{width: 100 + 'px'}}>
                        <option value=" " >Please select your state</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option >Arizona</option>
                        <option >Arkansas</option>
                        <option >California</option>
                        <option >Colorado</option>
                        <option >Connecticut</option>
                        <option >Delaware</option>
                        <option >District of Columbia</option>
                        <option> Florida</option>
                        <option >Georgia</option>
                        <option >Hawaii</option>
                        <option >daho</option>
                        <option >Illinois</option>
                        <option >Indiana</option>
                        <option >Iowa</option>
                        <option> Kansas</option>
                        <option >Kentucky</option>
                        <option >Louisiana</option>
                        <option>Maine</option>
                        <option >Maryland</option>
                        <option> Mass</option>
                        <option >Michigan</option>
                        <option >Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option> Uttah</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option >Washington</option>
                        <option >West Virginia</option>
                        <option>Wisconsin</option>
                        <option >Wyoming</option>
                      </select>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">Phone</label>
                  <div class="input-group">
                    <input name="phone" placeholder="(845) 555-1212" class="form-control" type="text"/>
                  </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label class="col-md-4 control-label">Zip Code</label>
                  <div class="input-group">
                    <input  name="zip" placeholder="Zip Code" class="form-control"  type="text" />
                  </div>
              </div>
            </div>
          </div>

          <div class="form-group" align="center">
            <label class="col-md-4 control-label"></label>
            <div class="col-md-4">
              <Link to='/pay'>
                <button
                  onClick={()=>handleSaveAddress()}
                  type="submit"
                  class="btn btn-grey btn-lg btn-block">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  Checkout
                  <span class="glyphicon glyphicon-send"></span>
                </button>
              </Link>
            </div>
          </div>

        </fieldset>
      </form>
    </div>

  );
}

Address.propTypes = {
saveAddress: PropTypes.func
}

export default Address;
