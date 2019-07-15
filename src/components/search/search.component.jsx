import React from 'react'
import { SearchHeader } from './search-header.component';
import BusSearch from './bus-search.component';
import './search.styles.scss';

export const Search = () => (
  <div className="search">
    <SearchHeader />
    <BusSearch />
  </div>
)
