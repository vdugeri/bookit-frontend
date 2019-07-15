import React from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { CustomDatePicker } from '../form-input/date-picker.component';
import './search.styles.scss';

class BusSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      passengers: '',
      departureDate: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleDateChange = (date) => {
    this.setState({ departureDate: date })
  }

  render() {
    return (
      <div className="search__bus">
        <FormInput
          type="search"
          name="origin"
          label="origin"
          handleChange={this.handleChange}
          value={this.state.origin}
        />

        <FormInput
          type="search"
          name="destination"
          label="destination"
          handleChange={this.handleChange}
          value={this.state.destination}
        />

        <CustomDatePicker
          name="departureDate"
          handleChange={this.handleDateChange}
          selected={this.state.departureDate}
          dateFormat="dd-MM-yyyy"
          className="form-input"
          label="date"
          value={this.state.departureDate}
        />

        <FormInput
          type="number"
          name="passengers"
          label="passengers"
          handleChange={this.handleChange}
          value={this.state.passengers}
        />
        <CustomButton>SEARCH</CustomButton>
      </div>
    )
  }
}

export default BusSearch;
