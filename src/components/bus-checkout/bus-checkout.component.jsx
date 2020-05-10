import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Divider } from "../divider/divider.component";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import { toggleHidden } from "../../redux/cart/cart.actions";
import { checkout } from "../../redux/checkout/checkout.actions";
import { selectCartItem } from "../../redux/cart/cart.selectors";

import "./bus-checkout.styles.scss";

class BusCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passengers: "",
      emailAddress: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { passengers, emailAddress } = this.state;
    const { toggleCartHidden, handlePayment } = this.props;
    const { cartItems } = this.props;
    const { price } = cartItems;

    const total = passengers * price * 100;

    return (
      <div className="bus-checkout">
        <div className="bus-checkout__content">
          <div className="bus-checkout__close">
            <span onClick={() => toggleCartHidden()}>close</span>
          </div>
          <div className="bus-checkout__header">
            <h2>Payment Details</h2>
            <Divider />
          </div>
          <div className="bus-checkout__details">
            <div className="bus-checkout__section">
              <span>Company</span>
              <h3>{cartItems.company.name}</h3>
            </div>
            <div className="bus-checkout__section">
              <span>Departure Time</span>
              <h3>{cartItems.departureTime}</h3>
            </div>
            <div className="bus-checkout__section">
              <span>Total Price</span>
              <h3>
                &#8358;{(cartItems.price * (passengers || 1)).toLocaleString()}
              </h3>
            </div>
          </div>
          <div className="bus-checkout__email">
            <FormInput
              type="email"
              value={emailAddress}
              handleChange={this.handleChange}
              name="emailAddress"
              label="Email Address"
              required
            />
          </div>
          <div className="bus-checkout__passengers">
            <FormInput
              type="number"
              value={passengers}
              handleChange={this.handleChange}
              name="passengers"
              label="passengers"
              required
            />
            <CustomButton
              onClick={() => handlePayment({ total, emailAddress })}
            >
              Pay Now
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleHidden()),
  handlePayment: ({ emailAddress, total }) =>
    dispatch(checkout({ emailAddress, total }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusCheckout);
