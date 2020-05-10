import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { CustomDatePicker } from "../form-input/date-picker.component";
import { LinkIcon } from "../link-icon/link-icon.component";
import { search, setQuery } from "../../redux/search/search.actions";
import Loader from "../../components/loader/loader.component";

import "./search.styles.scss";

class BusSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      destination: "",
      departureDate: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDateChange = (date) => {
    this.setState({ departureDate: date });
  };

  render() {
    const { origin, destination } = this.state;
    let { departureDate } = this.state;

    departureDate = new Date(departureDate).getTime();

    const query = {
      origin,
      destination,
      departureDate,
    };

    if (this.props.loading) {
      return <Loader />;
    }

    return (
      <div className="search__bus">
        <FormInput
          type="search"
          name="origin"
          label="origin"
          handleChange={this.handleChange}
          value={this.state.origin}
        />

        <LinkIcon />

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
          label="Date"
          value={this.state.departureDate}
        />

        <CustomButton
          onClick={() => {
            this.props.search(query);
            this.props.setQuery(query);
            this.props.history.push("/bus-results");
          }}
        >
          SEARCH
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.search.loading,
});

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query)),
  setQuery: (query) => dispatch(setQuery(query)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BusSearch)
);
