import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
    />
  );
};

export default SearchBar;
