import React, { useState, useEffect } from 'react';
import './App.css';
import { Search } from './Components/Search';
import { Cards } from './Components/Cards';
import { Filter } from './Components/Filter';
import { Spinner } from './Components/Spinner';
import data from './Components/data'; // Import default export

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchNotFound, setSearchNotFound] = useState('');
  const [selectedOwners, setSelectedOwners] = useState([]);
  const [activeStatus, setActiveStatus] = useState('All');
  const [query, setQuery] = useState('');
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    // Initialize with sample data
    setFilteredData(data.hits.hits);

    // Initialize owners from sample data
    const uniqueOwners = Array.from(new Set(data.hits.hits.map(item => item.source.current_owner)));
    setOwners(uniqueOwners);
  }, []);

  useEffect(() => {
    const filterData = (data, searchQuery, selectedOwners, status) => {
      return data.filter(item => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const markIdentification = item.source.mark_identification.toLowerCase();
        const currentOwner = item.source.current_owner.toLowerCase();
        const registrationNumber = item.source.registration_number.toLowerCase();
        const descriptions = item.source.mark_description?.description || [];

        return (
          (markIdentification.includes(lowerCaseQuery) ||
            currentOwner.includes(lowerCaseQuery) ||
            registrationNumber.includes(lowerCaseQuery) ||
            descriptions.some(desc => desc.toLowerCase().includes(lowerCaseQuery))) &&
          (selectedOwners.length === 0 || selectedOwners.includes(currentOwner)) &&
          (status === 'All' || item.source.status_type.toLowerCase() === status.toLowerCase())
        );
      });
    };

    const newFilteredData = filterData(data.hits.hits, query, selectedOwners, activeStatus);

    if (newFilteredData.length > 0) {
      setFilteredData(newFilteredData);
    } else {
      setSearchNotFound(`No results found for "${query}". The trademark may be available.`);
      setFilteredData([]);
    }

    setLoading(false);
  }, [query, selectedOwners, activeStatus]);

  const handleSearch = (searchQuery) => {
    setLoading(true);
    setSearchNotFound('');
    setQuery(searchQuery);
  };

  const handleOwnerChange = (owner, isChecked) => {
    const updatedOwners = isChecked
      ? [...selectedOwners, owner]
      : selectedOwners.filter(o => o !== owner);

    setSelectedOwners(updatedOwners);
    handleSearch(query);
  };

  const handleStatusChange = (status) => {
    setActiveStatus(status);
    handleSearch(query);
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    handleSearch(newQuery);
  };

  return (
    <div className="container mx-auto p-4">
      <Search onSearch={handleQueryChange} />
      <div className="mt-4 flex w-full">
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
        <div className="w-1/4 pl-4">
          <Filter 
            owners={owners} 
            onOwnerChange={handleOwnerChange} 
            onStatusChange={handleStatusChange} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
