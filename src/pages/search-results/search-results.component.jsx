import React from "react";

import { Navbar } from "../../components/navbar/navbar.component";
import { BusResult } from "../../components/bus-result/bus-result.component";
import { BusSearchDetails } from "../../components/bus-search-details/bus-search-details.component";
import { Footer } from "../../components/footer/footer.component";
import { Pagination } from "../../components/pagination/pagination.component";
import { BusCheckout } from "../../components/bus-checkout/bus-checkout.component";

import "./search-results.styles.scss";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [1, 2, 3, 4, 5, 6],
      results: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      cardNumber: "",
      expiryDate: "",
      cvv: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { results } = this.state;
    return (
      <div className="search-results">
        <Navbar color />
        <BusSearchDetails />
        {results.map(result => (
          <BusResult key={result.id} />
        ))}
        <BusCheckout
          cardNumber={this.state.cardNumber}
          handleChange={this.handleChange}
          expiryDate={this.state.expiryDate}
          cvv={this.state.cvv}
        />
        <Pagination pages={this.state.pages} />
        <Footer />
      </div>
    );
  }
}
