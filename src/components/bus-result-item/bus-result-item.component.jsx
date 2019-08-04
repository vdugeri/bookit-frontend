import React from "react";
import { LinkIcon } from "../link-icon/link-icon.component";
import { CustomButton } from "../custom-button/custom-button.component";

import "./bus-result-item.styles.scss";

export const BusResultItem = ({ result }) => (
  <div className="bus-result">
    <img src="https://via.placeholder.com/260x200" alt="bus" />
    <div className="bus-result__section">
      <h2>{result.bus.make}</h2>
      <div className="bus-result__locations">
        <span>
          {result.origin.state} ({result.origin.city})
        </span>
        <LinkIcon />
        <span>
          {result.destination.state} ({result.destination.city})
        </span>
      </div>
      <div className="bus-result__action">
        <CustomButton>Book Bus</CustomButton>
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
  </div>
);
