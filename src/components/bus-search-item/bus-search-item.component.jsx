import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectQuery } from "../../redux/search/search.selectors";
import { Divider } from "../divider/divider.component";

import "./bus-search-item.styles.scss";

const BusSearchItem = ({ query }) => (
  <div className="search-details">
    <h2>Your Search</h2>
    <Divider />
    <div className="search-details__content">
      <div className="search-details__section">
        <span>Origin</span>
        <h2>{query.origin}</h2>
      </div>
      <div className="search-details__section">
        <span>Destination</span>
        <h2>{query.destination}</h2>
      </div>
      <div className="search-details__section">
        <span>Departure Time</span>
        <h2>{new Date(query.departureDate).toLocaleDateString()}</h2>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  query: selectQuery
});

export default connect(mapStateToProps)(BusSearchItem);
