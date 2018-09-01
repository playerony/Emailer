import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    const { credits } = this.props;

    return (
      <StripeCheckout
        name="Emailer"
        image="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/symbol_at.png"
        description={`$${credits} for ${credits} credits`}
        amount={credits * 100}
        token={token => this.props.handleToken(token, credits)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn" >
          Add credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
