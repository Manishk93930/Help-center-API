import React, { useState } from 'react';
import './SearchBar.css';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    try {
      const response = await axios.get(`http://localhost:3001/cards/${query}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching cards:', error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button>Go</button>
    </div>
  );
};

export default SearchBar;
