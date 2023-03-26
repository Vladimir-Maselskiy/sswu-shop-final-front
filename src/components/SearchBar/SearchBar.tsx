import React from 'react';
import './SearchBar.scss';

export const SearchBar = () => {
  return (
    <div className="header-search-bar">
      <input className="header-search-bar__input" />
      <div className="header-search-icon"></div>
    </div>
  );
};
