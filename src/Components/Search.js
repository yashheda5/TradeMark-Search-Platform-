import React, { useState } from 'react';
import logo from '../Components/Images/logo.png';
import { CiSearch } from "react-icons/ci";

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
      <div className="relative flex items-center w-full">
        <input 
          type="text" 
          value={query} 
          onChange={handleChange} 
          onKeyPress={handleKeyPress} 
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp; Search Trademark Here eg. Nike" 
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {!query && <CiSearch className='absolute translate-x-3 w-[2rem] h-[2rem] text-gray-500' />}
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
