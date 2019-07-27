import React from "react";
import { Divider } from "../divider/divider.component";

import "./bus-search-details.styles.scss";

export const BusSearchDetails = () => (
  <div className="search-details">
    <h2>Your Search</h2>
    <Divider />
    <div className="search-details__content">
      <div className="search-details__section">
        <span>Origin</span>
        <h2>Abuja (Kubwa)</h2>
      </div>
      <div className="search-details__section">
        <span>Destination</span>
        <h2>Lagos (Jibowu)</h2>
      </div>
      <div className="search-details__section">
        <span>Departure Time</span>
        <h2>7:30 AM</h2>
      </div>
    </div>
  </div>
);
