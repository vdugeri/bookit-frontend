import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './form-input.styles.scss';

export const CustomDatePicker = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    <DatePicker
      onChange={handleChange}
      className="form-input"
      {...otherProps}
    />
    {
      label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>)
        : null
    }
  </div>
)
