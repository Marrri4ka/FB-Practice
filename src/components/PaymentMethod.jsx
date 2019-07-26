import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Confirmation from './Confirmation';
import axios from '../axios-db';
import {withRouter} from 'react-router-dom';

function PaymentMethod(props){

  function saveOrder(){
    const newOrder = {
     firstname: props.firstname,
     lastname: props.lastname,
     address: props.address,
     time: props.time,
     date: props.date,
     rentlist: props.rentlist,
     isPickup: props.isPickup,
     explainRules: props.explainRules,
     seattleArea: props.seattleArea
   };
   axios
     .post("/orders.json", newOrder)
     .then(response => props.history.push('/confirmation'))
     .catch(error => console.log(error));
  }


  let totalGames = 5 * props.rentlist.length;
  let totalShipping = 0;

  if(props.isPickup === true){
    totalShipping+=0;
  }
  if(props.explainRules===true){
    totalShipping+=5;
  }

  if(props.seattleArea === true){
    totalShipping+=5;
  }
  let total = totalGames + totalShipping;
  return(
    <div class="content">
<div class="container">
	 <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12">
                <div class="container">
	<div class="row">
		<div class="paymentCont">
						<div class="headingWrap">
								<h3 class="headingTop text-center">Select Your Payment Method</h3>

						</div>
						<div class="paymentWrap">
							<div class="btn-group paymentBtnGroup btn-group-justified" data-toggle="buttons">
					            <label class="btn paymentMethod active">
					            	<div class="method visa"></div>
					                <input type="radio" name="options"/>
					            </label>
					            <label class="btn paymentMethod">
					            	<div class="method master-card"></div>
					                <input type="radio" name="options"/>
					            </label>
					            <label class="btn paymentMethod">
				            		<div class="method amex"></div>
					                <input type="radio" name="options"/>
					            </label>
					             <label class="btn paymentMethod">
				             		<div class="method vishwa"></div>
					                <input type="radio" name="options"/>
					            </label>
					            <label class="btn paymentMethod">
				            		<div class="method ez-cash"></div>
					                <input type="radio" name="options"/>
					            </label>

					        </div>
						</div>
						<div class="footerNavWrap clearfix">
							<Link to='/'><div class="btn btn-grey pull-left btn-fyi"><span class="glyphicon glyphicon-chevron-left"></span> CONTINUE SHOPPING</div></Link>
							<div onClick={()=> saveOrder()}class="btn btn-grey pull-right btn-fyi">CHECKOUT<span class="glyphicon glyphicon-chevron-right"></span></div>
						</div>
					</div>

	</div>
</div>




                </div>
                <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12">

                    <div class="widget">
                        <h4 class="widget-title">Order Summary</h4>
                        <div class="summary-block">
                            <div class="summary-content">
                                <div class="summary-head"><h5 class="summary-title">Games</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">${totalGames}.00</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Shipping</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">${totalShipping}.00</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Total</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">$ {total}.00</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget">
                        <h4 class="widget-title">Shipping Address</h4>
                        <div class="summary-block">
                            <div class="summary-content">
                                <div class="summary-head"><h5 class="summary-title">Name</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">{props.firstname} {props.lastname}</p>

                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Address</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">{props.address}</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Time</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">{props.time}</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                        <div class="summary-block">
                            <div class="summary-content">
                               <div class="summary-head"> <h5 class="summary-title">Date</h5></div>
                                <div class="summary-price">
                                    <p class="summary-text">{props.date}</p>
                                    <span class="summary-small-text pull-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
    </div>
  );
}

PaymentMethod.propTypes = {
  isPickup: PropTypes.bool,
  explainRules: PropTypes.bool,
  seattleArea: PropTypes.bool,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  address: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  rentlist: PropTypes.array,

}


export default withRouter( PaymentMethod);
