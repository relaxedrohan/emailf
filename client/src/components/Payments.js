import  React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';


class Payments extends Component{
    render(){
        return(
            <StripeCheckout
            name = 'EmailF'
            description = "50INR for 5 Emails"
            amount = { 5000 }
            token = { token => this.props.handleToken(token) }
            stripeKey = { process.env.REACT_APP_STRIPE_KEY }
            >
                <button className="btn">Add credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);