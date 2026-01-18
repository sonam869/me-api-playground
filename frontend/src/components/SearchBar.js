import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, value, onChange }) => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <Search size={20} color="#999" />
        <input 
          placeholder="Search projects or skills..." 
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;