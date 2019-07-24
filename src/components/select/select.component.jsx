import React from 'react';
import './select.styles.scss';

export const CustomSelect = ({ id, values }) => (

  <div class="select-box">
    <div class="select-box__current" tabindex="1">
      {
        values.map(value => (
          <div key={value} class="select-box__value">
            <input class="select-box__input" type="radio" id={id} value={value} name="{value}" />
            <p class="select-box__input-text">{value}</p>
          </div>
        ))
      }
      <img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
    </div>
    <ul class="select-box__list">
      {
        values.map(value => (
          <li>
            <label class="select-box__option" htmlFor={id} aria-hidden="aria-hidden">{value}</label>
          </li>
        ))
      }
    </ul>
  </div>
)
