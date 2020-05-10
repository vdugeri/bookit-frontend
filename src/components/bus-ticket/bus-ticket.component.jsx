import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPaymentDetails } from "../../redux/checkout/checkout.selectors";

import "./bus-ticket.styles.scss";

const BusTicket = () => (
  <div className="bus-ticket">
    <div className="bus-ticket__card">
      <div className="bus-ticket__details">
        <div className="bus-ticket__section">
          <h2>Origin</h2>
          <span>Abuja (Kubwa)</span>
        </div>
        <div className="bus-ticket__section">
          <h2>Destination</h2>
          <span>Lagos (Yaba)</span>
        </div>
        <div className="bus-ticket__section">
          <h2>Departure Time</h2>
          <span>6:30 AM</span>
        </div>
        <div className="bus-ticket__section">
          <h2>Departure Date</h2>
          <span>25TH AUGUST, 2019</span>
        </div>
      </div>
      <div className="bus-ticket__customer-info">
        <div className="bus-ticket__customer-info--header">
          <span>Customer info</span>
          <span className="horizontal-line">
            <hr />
          </span>
        </div>
        <div className="bus-ticket__customer-info--section">
          <h2>Customer Name</h2>
          <span>Verem Dugeri</span>
        </div>
        <div className="bus-ticket__customer-info--others">
          <div className="company">
            <h2>Company</h2>
            <span>ABC Transport</span>
          </div>
          <div className="company">
            <h2>Seats</h2>
            <span>1</span>
          </div>
        </div>
      </div>
      <div className="bus-ticket--footer">footer</div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  paymentDetails: selectPaymentDetails
});

export default connect(mapStateToProps)(BusTicket);
