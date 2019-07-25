import React from "react";
import "./select.styles.scss";

export const CustomSelect = ({ id, values }) => (
  <div className="select-box">
    <div className="select-box__current" tabIndex="1">
      {values.map((value, index) => (
        <div key={index} className="select-box__value">
          <input
            className="select-box__input"
            type="radio"
            id={id}
            value={value}
            name="{value}"
          />
          <p className="select-box__input-text">{value}</p>
        </div>
      ))}
      <img
        className="select-box__icon"
        src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
        alt="Arrow Icon"
        aria-hidden="true"
      />
    </div>
    <ul className="select-box__list">
      {values.map((value, index) => (
        <li key={index}>
          <label
            className="select-box__option"
            htmlFor={id}
            aria-hidden="aria-hidden"
          >
            {value}
          </label>
        </li>
      ))}
    </ul>
  </div>
);
