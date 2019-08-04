import React from "react";
import { LinkIcon } from "../link-icon/link-icon.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";

import "./bus-result.styles.scss";

export const BusResult = () => (
  <div className="bus-result">
    <img src="https://via.placeholder.com/260x200" alt="bus" />
    <div className="bus-result__section">
      <h2>Toyota Hiace Bus</h2>
      <div className="bus-result__locations">
        <span>Abuja (Kubwa)</span>
        <LinkIcon />
        <span>Lagos (Jibowu)</span>
      </div>
      <div className="bus-result__action">
        <CustomButton>Book Bus</CustomButton>
      </div>
    </div>
    <div className="bus-result__section">
      <h2>Departure Time</h2>
      <span>7:30 AM</span>
    </div>
    <div className="bus-result__section">
      <h2>Seats Available</h2>
      <span>3</span>
    </div>
    <div className="bus-result__section">
      <h2>Passengers</h2>
      <FormInput type="number" small />
    </div>
  </div>
);
