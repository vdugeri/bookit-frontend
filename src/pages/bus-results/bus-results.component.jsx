import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Navbar } from "../../components/navbar/navbar.component";
import BusResultItem from "../../components/bus-result-item/bus-result-item.component";
import BusSearchItem from "../../components/bus-search-item/bus-search-item.component";
import { Footer } from "../../components/footer/footer.component";
import BusCheckout from "../../components/bus-checkout/bus-checkout.component";

import { selectBusResults } from "../../redux/search/search.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./bus-results.styles.scss";

const SearchResults = ({ results, cartHidden }) => (
  <div className="search-results">
    <Navbar color />
    <BusSearchItem />
    {results.map(result => (
      <BusResultItem key={result._id} result={result} />
    ))}
    {cartHidden ? null : <BusCheckout />}
    <Footer />
  </div>
);

const mapStateToProps = createStructuredSelector({
  results: selectBusResults,
  cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(SearchResults);
