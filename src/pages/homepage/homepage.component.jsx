import React from "react";
import { Header } from "../../components/header/header.component";
import { Search } from "../../components/search/search.component";
import { About } from "../../components/about/about.component";
import { HowTo } from "../../components/how-to/how-to.component";
import { Footer } from "../../components/footer/footer.component";
import "./homepage.styles.scss";

export const HomePage = () => (
  <div className="homepage">
    <Header />
    <div className="homepage__search">
      <Search />
    </div>
    <div className="homepage__about">
      <About />
    </div>
    <div className="homepage__howto">
      <HowTo />
    </div>
    <Footer />
  </div>
);
