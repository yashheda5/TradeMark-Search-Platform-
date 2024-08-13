import React, { useState } from 'react';
import './App.css';
import { Search } from './Components/Search';
import { Cards } from './Components/Cards';
import { Filter } from './Components/Filter';
import { initialData } from './Components/data';
import { Spinner } from './Components/Spinner';

function App() {
  const [filteredData, setFilteredData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [searchNotFound, setSearchNotFound] = useState('');
  const [selectedOwners, setSelectedOwners] = useState([]);

  const owners = ["Tesla, Inc.", "LEGALFORCE RAPC.", "SpaceX Inc."]; // List of owners

  const handleSearch = (query) => {
    setLoading(true);
    setSearchNotFound('');

    // Filter data based on query and selected owners
    const filterData = (data, query, selectedOwners) => {
      const filtered = data.filter(item =>
        (item.mark.toLowerCase().includes(query.toLowerCase()) ||
          item.company.toLowerCase().includes(query.toLowerCase()) ||
          item.number.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.classes.some(cls => cls.toLowerCase().includes(query.toLowerCase()))) &&
        (selectedOwners.length === 0 || selectedOwners.includes(item.company))
      );

      return filtered.length > 0 ? filtered : [];
    };

    const newFilteredData = filterData(initialData, query, selectedOwners);

    if (newFilteredData.length > 0) {
      setFilteredData(newFilteredData);
      setSearchNotFound('');
    } else {
      setFilteredData([]);
      setSearchNotFound(`No results found for "${query}". The trademark may be available.`);
    }

    setLoading(false);
  };

  const handleOwnerChange = (owner, isChecked) => {
    const updatedOwners = isChecked
      ? [...selectedOwners, owner]
      : selectedOwners.filter(o => o !== owner);

    setSelectedOwners(updatedOwners);
  };

  return (
    <div className="container mx-auto p-4">
      <Search onSearch={handleSearch} />
      <div className="mt-4 flex w-[100%]">
        {/* Left Column: Cards and Loading Spinner */}
        <div className="w-3/4 pr-4">
          {loading ? (
            <Spinner />
          ) : (
            searchNotFound ? (
              <div className="p-4 text-red-500 font-semibold">{searchNotFound}</div>
            ) : (
              <Cards data={filteredData} />
            )
          )}
        </div>

        {/* Right Column: Filters */}
        <div className="w-1/4 pl-4">
          <Filter owners={owners} onOwnerChange={handleOwnerChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
