import React from "react";

import { Navbar } from "../../components/navbar/navbar.component";
import { BusResult } from "../../components/bus-result/bus-result.component";
import { BusSearchDetails } from "../../components/bus-search-details/bus-search-details.component";
import { Footer } from "../../components/footer/footer.component";

import "./search-results.styles.scss";

export const SearchResults = () => (
  <div className="search-results">
    <Navbar color />
    <BusSearchDetails />
    <BusResult />
    <BusResult />
    <BusResult />
    <BusResult />
    <Footer />
  </div>
);
