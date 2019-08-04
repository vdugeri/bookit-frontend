import React from "react";
import { Divider } from "../divider/divider.component";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import "./bus-checkout.styles.scss";

export const BusCheckout = ({ cardNumber, handleChange, ...otherProps }) => {
  const { expiryDate, cvv } = otherProps;
  return (
    <div className="bus-checkout">
      <div className="bus-checkout__content">
        <div className="bus-checkout__close">
          <span>close</span>
        </div>
        <div className="bus-checkout__header">
          <h2>Payment Details</h2>
          <Divider />
        </div>
        <div className="bus-checkout__details">
          <div className="bus-checkout__section">
            <span>Company</span>
            <h3>ABC Transport</h3>
          </div>
          <div className="bus-checkout__section">
            <span>Passengers</span>
            <h3>3</h3>
          </div>
          <div className="bus-checkout__section">
            <span>Departure Time</span>
            <h3>7:30 AM</h3>
          </div>
          <div className="bus-checkout__section">
            <span>Total Price</span>
            <h3>24,400</h3>
          </div>
        </div>
        <div className="bus-checkout__payment">
          <FormInput
            label="CARD NUMBER"
            type="text"
            value={cardNumber}
            handleChange={handleChange}
            name="cardNumber"
          />
          <div className="small-group">
            <FormInput
              label="EXPIRY DATE"
              type="text"
              value={expiryDate}
              handleChange={handleChange}
              name="expiryDate"
            />
            <FormInput
              label="CVV"
              type="text"
              value={cvv}
              handleChange={handleChange}
              name="cvv"
            />
          </div>
          <div className="bus-checkout__button">
            <CustomButton>Pay Now</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
