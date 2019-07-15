import React from 'react';
import { Header } from '../components/header/header.component';
import { Search } from '../components/search/search.component';
import './homepage.styles.scss';

export const HomePage = () => (
  <div className="homepage">
    <Header />
    <Search />
  </div>
)
