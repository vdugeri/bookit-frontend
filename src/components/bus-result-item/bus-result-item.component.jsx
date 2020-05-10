import React from "react";
import { connect } from "react-redux";
import { LinkIcon } from "../link-icon/link-icon.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { toggleHidden, addItemToCart } from "../../redux/cart/cart.actions";

import "./bus-result-item.styles.scss";

const BusResultItem = ({ result, addToCart, toggleCartHidden }) => (
  <div className="bus-result">
    <img src="https://via.placeholder.com/100x100" alt="bus" />
    <div className="bus-result__section">
      <h2>{result.bus.make}</h2>
      <div className="bus-result__locations">
        <span>
          {result.origin.state} ({result.origin.city})
        </span>
        <span>
          <LinkIcon />
        </span>
        <span>
          {result.destination.state} ({result.destination.city})
        </span>
      </div>
    </div>
    <div className="bus-result__section">
      <h2>Departure Time</h2>
      <span>
        {result.departureDate}({result.departureTime})
      </span>
    </div>
    <div className="bus-result__section">
      <h2>Seats Available</h2>
      <span>{result.availableSeats}</span>
    </div>
    <div className="bus-result__section">
      <h2>Unit Price</h2>
      <span>&#8358;{result.price.toLocaleString()}</span>
    </div>
    <div className="bus-result__action">
      <CustomButton
        onClick={() => {
          addToCart(result);
          toggleCartHidden();
        }}
      >
        Book Bus
      </CustomButton>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addToCart: (bus) => dispatch(addItemToCart(bus)),
  toggleCartHidden: () => dispatch(toggleHidden()),
});

export default connect(null, mapDispatchToProps)(BusResultItem);
