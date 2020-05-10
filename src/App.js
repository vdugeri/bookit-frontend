import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/homepage/homepage.component";
import SearchResults from "./pages/bus-results/bus-results.component";
import BusTicket from "./components/bus-ticket/bus-ticket.component";

import { selectPaymentDetails } from "./redux/checkout/checkout.selectors";

function App({ paymentDetails }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/bus-results"
          render={() =>
            paymentDetails && paymentDetails.response ? (
              <BusTicket />
            ) : (
              <SearchResults />
            )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  paymentDetails: selectPaymentDetails
});

export default connect(mapStateToProps)(App);
