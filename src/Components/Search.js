import React, { useState } from 'react';
import logo from '../Components/Images/logo.png';

export const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center p-4">
      <div className="mr-6">
        <img src={logo} alt="Trademarkia Logo" className="h-8 w-auto" />
      </div>
      <div className="flex items-center w-full">
        <input 
          type="text" 
          value={query} 
          onChange={handleChange} 
          onKeyPress={handleKeyPress} 
          placeholder="Search Trademark Here eg. Nike" 
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button 
          onClick={handleSearch} 
          className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};
